
"use client";
import { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import Compressor from "compressorjs";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebaseConfig";
import ContactUsFooter from "@/components/ContactUs/ContactUsFooter";
import ContactUsSubmitLoader from "@/components/ContactUs/ContactUsSubmitLoader";
import ContactUsWarning from "@/components/ContactUs/ContactUsWarning";

const services = [
  "Interface design",
  "Illustration",
  "Brand Identity",
  "Development",
  "Animation",
  "Webflow",
  "3D motion",
];

const compressFile = (file) => {
  if (file.type.startsWith("image/")) {
    return new Promise((resolve) => {
      new Compressor(file, {
        quality: 0.6,
        success: (result) => resolve(result),
        error: (err) => {
          console.error("Compression error:", err);
          resolve(file);
        },
      });
    });
  }
  return Promise.resolve(file);
};

const ContactUsWrapper = () => {
  const formRef = useRef();
  const fileInputRef = useRef(null);

  const [selectedServices, setSelectedServices] = useState([]);
  const [files, setFiles] = useState([]);
  const [compressedFiles, setCompressedFiles] = useState([]);
  const [isCompressed, setCompressed] = useState(false);
  const [imageUrls, setUrls] = useState([]);
  const [attachmentsCount, setAttachmentsCount] = useState(0);
  const [isWithoutImage, setWithoutImage] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isFail, setFail] = useState(false);

  // 1. Добавили budget в дефолтный стейт
  const [client, setClient] = useState({
    from_name: "",
    email: "",
    details: "",
    budget: "",
  });

  const webHookUrl =
    "https://hooks.slack.com/services/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";

  useEffect(() => {
    const appDiv = document.querySelector(".app");
    if (appDiv) {
      appDiv.classList.add("app--white");
    }
    return () => {
      if (appDiv) {
        appDiv.classList.remove("app--white");
      }
    };
  }, []);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleInputChange = (e) => {
    const { name, id, value } = e.target;
    const key = name || id;
    setClient((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...newFiles]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const checkFormFilled = () => {
    if (!formRef.current) return false;
    const name = formRef.current.from_name.value.trim();
    const email = formRef.current.email.value.trim();
    const project = formRef.current.details.value.trim();
    return name && email && project;
  };

  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleFormChange = () => {
    setIsFormFilled(checkFormFilled());
  };

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      let finalUrls = [];

      if (files.length > 0) {
        const compressed = await Promise.all(
          files.map((file) => compressFile(file)),
        );

        const uploadPromises = compressed.map(async (file) => {
          const storageRef = ref(
            storage,
            `/files/${file.name}_${Math.random().toString(36).slice(2)}`,
          );
          const uploadTask = await uploadBytesResumable(storageRef, file);
          const url = await getDownloadURL(uploadTask.ref);

          setAttachmentsCount((prev) => prev + 1);
          return url.split("token")[0];
        });

        finalUrls = await Promise.all(uploadPromises);
      }

      const templateParams = {
        from_name: client.from_name,
        email: client.email,
        service: selectedServices.join(", "),
        details: client.details,
        budget: client.budget || "Not specified",
        files: finalUrls.join(" "),
      };

      await emailjs.send(
        "service_iy4twy9",
        "template_gnnit8n",
        templateParams,
        "XVlqzmwyk5p21XGJI",
      );

      setSuccess(true);
      resetForm();
    } catch (error) {
      console.error("Submission error:", error);
      setFail(true);
    } finally {
      setLoading(false);
    }
  }

  const resetForm = () => {
    setTimeout(() => {
      setSuccess(false);
      formRef.current?.reset();
      setFiles([]);
      setSelectedServices([]);
      setClient({ from_name: "", email: "", details: "", budget: "" });
      setAttachmentsCount(0);
    }, 3000);
  };

  function onClose() {
    setFail(false);
    setSuccess(false);
  }

  return (
    <>
      <article className="contact-us">
        <div className="contact-us__container">
          <h1 className="contact-us__title">
            Building ambitious digital experiences.
          </h1>
          <p className="contact-us__descr">
            From fintech platforms to motion-driven brand systems, we help
            technology companies create products that scale with clarity and
            precision.
          </p>

          <div className="contact-us__services">
            {services.map((service) => (
              <button
                key={service}
                type="button"
                className={`contact-us__service${
                  selectedServices.includes(service)
                    ? " contact-us__service--active"
                    : ""
                }`}
                onClick={() => toggleService(service)}
              >
                {service}
              </button>
            ))}
          </div>

          <form className="contact-us__form" ref={formRef} onSubmit={onSubmit}>
            <div className="contact-us__field">
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="contact-us__input"
                placeholder="Your name"
                onChange={(e) => {
                  handleInputChange(e);
                  handleFormChange();
                }}
                required
              />
              <label htmlFor="from_name" className="contact-us__label">
                Your name
              </label>
            </div>

            <div className="contact-us__field">
              <input
                type="email"
                id="email"
                name="email"
                className="contact-us__input"
                placeholder="Email"
                onChange={(e) => {
                  handleInputChange(e);
                  handleFormChange();
                }}
                required
              />
              <label htmlFor="email" className="contact-us__label">
                Email
              </label>
            </div>

            <div className="contact-us__field contact-us__field--textarea">
              <textarea
                id="details"
                name="details"
                className="contact-us__input contact-us__textarea"
                placeholder="Please tell us about your project"
                onChange={(e) => {
                  handleInputChange(e);
                  handleFormChange();
                }}
                rows={4}
                required
              />
              <label htmlFor="details" className="contact-us__label">
                Please tell us about your project
              </label>
            </div>

            <div className="contact-us__file">
              <button
                type="button"
                className="contact-us__file-label"
                onClick={triggerFileInput}
              >
                <span className="contact-us__file-plus">+</span>
                Click to choose a file
              </button>
              <input
                type="file"
                id="file"
                ref={fileInputRef}
                className="contact-us__file-input"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.rar"
                multiple
                onChange={handleFileChange}
              />
            </div>

            {files.length > 0 && (
              <div className="contact-us__file-list">
                <label className="contact-us__file-list-label">
                  Attachment
                </label>
                <ul className="contact-us__file-items">
                  {files.map((file, index) => (
                    <li key={index} className="contact-us__file-item">
                      <span
                        className="contact-us__file-x"
                        onClick={() => removeFile(index)}
                      >
                        <img src="/favicon/Group 1.png" alt="remove" />
                      </span>
                      <span className="contact-us__file-name">{file.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="contact-us__budget">
              <p>Budget</p>

              {/* 3. Вешаем handleInputChange на весь fieldset, чтобы отлавливать клики по радио-кнопкам */}
              <fieldset onChange={handleInputChange}>
                <input type="radio" name="budget" id="under-10" value='Under $10k' />
                <label htmlFor="under-10">Under $10k</label>

                <input type="radio" name="budget" id="ten-25" value='$10 - 25k' />
                <label htmlFor="ten-25">$10 - 25k</label>

                <input type="radio" name="budget" id="plus-25" value='25k+' />
                <label htmlFor="plus-25">25k+</label>
              </fieldset>
            </div>

            <button
              type="submit"
              className={`contact-us__submit${!isFormFilled ? " contact-us__submit--disabled" : ""}`}
              disabled={!isFormFilled}
            >
              Submit
            </button>
          </form>
        </div>
        {isLoading && (
          <ContactUsSubmitLoader
            attachmentsCount={attachmentsCount}
            files={files}
          />
        )}
        {isSuccess ? (
          <ContactUsWarning
            onClose={onClose}
            title="Thank you!"
            description="We will contact you within 12 hours."
            type="success"
          />
        ) : isFail ? (
          <ContactUsWarning
            onClose={onClose}
            title="Oops. File error!"
            description="The file was not uploaded - 20 mb max."
            type="error"
          />
        ) : null}
      </article>
    </>
  );
};

export default ContactUsWrapper;

// "use client";
// import { useEffect, useState, useRef } from "react";
// import emailjs from "emailjs-com";
// import Compressor from "compressorjs";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { storage } from "@/firebaseConfig";
// import ContactUsSubmitLoader from "@/components/ContactUs/ContactUsSubmitLoader";
// import ContactUsWarning from "@/components/ContactUs/ContactUsWarning";

// const services = [
//   "Interface design",
//   "Illustration",
//   "Brand Identity",
//   "Development",
//   "Animation",
//   "Webflow",
//   "3D motion",
// ];

// const compressFile = (file) => {
//   // Проверяем, является ли файл изображением
//   if (file.type.startsWith("image/")) {
//     return new Promise((resolve) => {
//       new Compressor(file, {
//         quality: 0.6,
//         success: (result) => resolve(result),
//         error: (err) => {
//           console.error("Compression error:", err);
//           resolve(file); // Если не сжалось, возвращаем оригинал
//         },
//       });
//     });
//   }
//   return Promise.resolve(file); // Если это PDF/Zip, просто возвращаем как есть
// };

// const ContactUsWrapper = () => {
//   const formRef = useRef();
//   const fileInputRef = useRef(null);

//   const [selectedServices, setSelectedServices] = useState([]);
//   const [files, setFiles] = useState([]);
//   const [compressedFiles, setCompressedFiles] = useState([]);
//   const [isCompressed, setCompressed] = useState(false);
//   const [imageUrls, setUrls] = useState([]);
//   const [attachmentsCount, setAttachmentsCount] = useState(0);
//   const [isWithoutImage, setWithoutImage] = useState(false);

//   const [isLoading, setLoading] = useState(false);
//   const [isSuccess, setSuccess] = useState(false);
//   const [isFail, setFail] = useState(false);

//   const [client, setClient] = useState({
//     from_name: "",
//     email: "",
//     details: "",
//   });

//   const webHookUrl =
//     "https://hooks.slack.com/services/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";

//   useEffect(() => {
//     const appDiv = document.querySelector(".app");
//     if (appDiv) {
//       appDiv.classList.add("app--white");
//     }
//     return () => {
//       if (appDiv) {
//         appDiv.classList.remove("app--white");
//       }
//     };
//   }, []);

//   const toggleService = (service) => {
//     setSelectedServices((prev) =>
//       prev.includes(service)
//         ? prev.filter((s) => s !== service)
//         : [...prev, service],
//     );
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setClient((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleFileChange = (e) => {
//     const newFiles = Array.from(e.target.files || []);
//     setFiles((prev) => [...prev, ...newFiles]);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const removeFile = (index) => {
//     setFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   const checkFormFilled = () => {
//     if (!formRef.current) return false;
//     const name = formRef.current.from_name.value.trim();
//     const email = formRef.current.email.value.trim();
//     const project = formRef.current.details.value.trim();
//     return name && email && project;
//   };

//   const [isFormFilled, setIsFormFilled] = useState(false);

//   const handleFormChange = () => {
//     setIsFormFilled(checkFormFilled());
//   };

//   async function onSubmit(event) {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       let finalUrls = [];

//       if (files.length > 0) {
//         // 1. Компрессия всех файлов параллельно
//         const compressed = await Promise.all(
//           files.map((file) => compressFile(file)),
//         );

//         // 2. Загрузка в Firebase
//         const uploadPromises = compressed.map(async (file) => {
//           const storageRef = ref(
//             storage,
//             `/files/${file.name}_${Math.random().toString(36).slice(2)}`,
//           );
//           const uploadTask = await uploadBytesResumable(storageRef, file);
//           const url = await getDownloadURL(uploadTask.ref);

//           // Обновляем прогресс для лоадера (опционально)
//           setAttachmentsCount((prev) => prev + 1);
//           return url.split("token")[0];
//         });

//         finalUrls = await Promise.all(uploadPromises);
//       }

//       // 3. Отправка в EmailJS
//       const templateParams = {
//         from_name: client.from_name,
//         email: client.email,
//         service: selectedServices.join(", "),
//         details: client.details,
//         files: finalUrls.join(" "),
//       };

//       await emailjs.send(
//         "service_iy4twy9",
//         "template_gnnit8n",
//         templateParams,
//         "XVlqzmwyk5p21XGJI",
//       );

//       // 4. Успех
//       setSuccess(true);
//       resetForm();
//     } catch (error) {
//       console.error("Submission error:", error);
//       setFail(true);
//     } finally {
//       setLoading(false); // Выключит Uploading в любом случае
//     }
//   }

//   const resetForm = () => {
//     setTimeout(() => {
//       setSuccess(false);
//       formRef.current?.reset();
//       setFiles([]);
//       setSelectedServices([]);
//       setClient({ from_name: "", email: "", details: "" });
//       setAttachmentsCount(0);
//     }, 3000);
//   };

//   function onClose() {
//     setFail(false);
//     setSuccess(false);
//   }

//   return (
//     <>
//       <article className="contact-us">
//         <div className="contact-us__container">
//           <h1 className="contact-us__title">
//             Building ambitious digital experiences.
//           </h1>
//           <p className="contact-us__descr">
//             From fintech platforms to motion-driven brand systems, we help
//             technology companies create products that scale with clarity and
//             precision.
//           </p>

//           <div className="contact-us__services">
//             {services.map((service) => (
//               <button
//                 key={service}
//                 type="button"
//                 className={`contact-us__service${
//                   selectedServices.includes(service)
//                     ? " contact-us__service--active"
//                     : ""
//                 }`}
//                 onClick={() => toggleService(service)}
//               >
//                 {service}
//               </button>
//             ))}
//           </div>

//           <form className="contact-us__form" ref={formRef} onSubmit={onSubmit}>
//             <div className="contact-us__field">
//               <input
//                 type="text"
//                 id="from_name"
//                 name="from_name"
//                 className="contact-us__input"
//                 placeholder="Your name"
//                 onChange={(e) => {
//                   handleInputChange(e);
//                   handleFormChange();
//                 }}
//                 required
//               />
//               <label htmlFor="from_name" className="contact-us__label">
//                 Your name
//               </label>
//             </div>

//             <div className="contact-us__field">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="contact-us__input"
//                 placeholder="Email"
//                 onChange={(e) => {
//                   handleInputChange(e);
//                   handleFormChange();
//                 }}
//                 required
//               />
//               <label htmlFor="email" className="contact-us__label">
//                 Email
//               </label>
//             </div>

//             <div className="contact-us__field contact-us__field--textarea">
//               <textarea
//                 id="details"
//                 name="details"
//                 className="contact-us__input contact-us__textarea"
//                 placeholder="Please tell us about your project"
//                 onChange={(e) => {
//                   handleInputChange(e);
//                   handleFormChange();
//                 }}
//                 rows={4}
//                 required
//               />
//               <label htmlFor="details" className="contact-us__label">
//                 Please tell us about your project
//               </label>
//             </div>

//             <div className="contact-us__file">
//               <button
//                 type="button"
//                 className="contact-us__file-label"
//                 onClick={triggerFileInput}
//               >
//                 <span className="contact-us__file-plus">+</span>
//                 Click to choose a file
//               </button>
//               <input
//                 type="file"
//                 id="file"
//                 ref={fileInputRef}
//                 className="contact-us__file-input"
//                 accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.rar"
//                 multiple
//                 onChange={handleFileChange}
//               />
//             </div>

//             {files.length > 0 && (
//               <div className="contact-us__file-list">
//                 <label className="contact-us__file-list-label">
//                   Attachment
//                 </label>
//                 <ul className="contact-us__file-items">
//                   {files.map((file, index) => (
//                     <li key={index} className="contact-us__file-item">
//                       <span
//                         className="contact-us__file-x"
//                         onClick={() => removeFile(index)}
//                       >
//                         <img src="/favicon/Group 1.png" alt="remove" />
//                       </span>
//                       <span className="contact-us__file-name">{file.name}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             <div className="contact-us__budget">
//               <p>Budget</p>

//               <fieldset>
//                 <input type="radio" name="budget" id="under-10" value='Under $10k' />
//                 <label htmlFor="under-10">Under $10k</label>

//                 <input type="radio" name="budget" id="ten-25" value='$10 - 25k' />
//                 <label htmlFor="ten-25">$10 - 25k</label>

//                 <input type="radio" name="budget" id="plus-25" value='25k+' />
//                 <label htmlFor="plus-25">25k+</label>
//               </fieldset>
//             </div>

//             <button
//               type="submit"
//               className={`contact-us__submit${!isFormFilled ? " contact-us__submit--disabled" : ""}`}
//               disabled={!isFormFilled}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//         {isLoading && (
//           <ContactUsSubmitLoader
//             attachmentsCount={attachmentsCount}
//             files={files}
//           />
//         )}
//         {isSuccess ? (
//           <ContactUsWarning
//             onClose={onClose}
//             title="Thank you!"
//             description="We will contact you within 12 hours."
//             type="success"
//           />
//         ) : isFail ? (
//           <ContactUsWarning
//             onClose={onClose}
//             title="Oops. File error!"
//             description="The file was not uploaded - 20 mb max."
//             type="error"
//           />
//         ) : null}
//       </article>
//     </>
//   );
// };

// export default ContactUsWrapper;
