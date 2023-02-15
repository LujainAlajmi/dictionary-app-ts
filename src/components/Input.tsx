import classNames from "classnames";
import { useFont } from "../context/font";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function Input({
  refetch,
  setSearchWord,
}: {
  refetch: any;
  setSearchWord: any;
}) {
  const { font } = useFont();

  const searchSchema = Yup.object().shape({
    search: Yup.string().required("Whoops, can’t be empty…"),
  });
  return (
    <div className="relative">
      <Formik
        initialValues={{
          search: "",
        }}
        validationSchema={searchSchema}
        onSubmit={(values) => {
          setSearchWord(values.search);
          refetch(values.search);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="search"
              type="text"
              placeholder="Search for any word…"
              required
              className={classNames(
                "h-16 w-full rounded-2xl border border-[#F4F4F4] bg-[#F4F4F4] p-5 text-xl font-bold placeholder:text-[#2D2D2D] placeholder:opacity-25  focus:outline-none  focus:ring focus:ring-[#A445ED]  dark:border-[#1F1F1F] dark:bg-[#1F1F1F] dark:text-white dark:placeholder:text-white dark:placeholder:opacity-25",
                font === "font-serif" && "font-serif",
                font === "font-sans" && "font-sans",
                font === "font-mono" && "font-mono",
                errors.search &&
                  touched.search &&
                  " invalid:border-[#FF5252] invalid:text-[#FF5252]  focus:invalid:border-[#FF5252] focus:invalid:ring-[#FF5252]  dark:invalid:border-[#FF5252] dark:invalid:text-[#FF5252]"
              )}
            />

            <ErrorMessage
              name="search"
              component="p"
              className="text-[#FF5252]"
            />
            <div className="absolute inset-y-6 right-5">
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="none"
                    stroke="#A445ED"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
                  />
                </svg>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
