import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="my-30 px-10 container mx-auto">
      <div className="-mx-4 flex flex-wrap lg:justify-between">
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          {/* Left side info */}
          <div className="mb-12 max-w-[570px] lg:mb-0">
            <span className="mb-4 block text-base font-semibold text-primary">
              Contact Us
            </span>
            <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              GET IN TOUCH WITH US
            </h2>
            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div className="relative rounded-lg bg-white text-black p-8 shadow-lg dark:bg-dark-2 sm:p-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                  className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Email"
                  {...register("email")}
                  className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Phone"
                  {...register("phone")}
                  className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  {...register("details")}
                  className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
