import React from "react";
import Form from "../../components/form/Form";
import Input from "../../components/form/input/InputWrrapp";
import TextArea from "../../components/form/textArea/TextArea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { VALIDATE_YUP } from "../../common/validateYup";

const schema = Yup.object({
  title: VALIDATE_YUP.TITLE,
  description: VALIDATE_YUP.DESCRIPTION,
});

const FormReview = ({ setShowFormReview }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFormReviews = (values) => {
    console.log(values);
    reset();
    setShowFormReview(false);
  };

  return (
    <div className="p-[50px]">
      <h2 className="buyreName mb-3 text-4xl">{"Manh Quan"}</h2>
      <Form handleSubmit={handleSubmit(onSubmitFormReviews)}>
        <div className="relative pb-5">
          <Input
            name="title"
            placeholder="Give your review a title"
            control={control}
          ></Input>
          {errors?.title?.message && (
            <p className="text-red-500 bottom-0  absolute">
              {errors?.title?.message}
            </p>
          )}
        </div>
        <div className="relative pb-5">
          <TextArea
            name="description"
            placeholder="Give us your review"
            control={control}
          ></TextArea>
          {errors?.description?.message && (
            <p className="text-red-500 absolute">
              {errors?.description?.message}
            </p>
          )}
        </div>
        <div className="text-end">
          <button className="submitRating py-[15px] px-[30px] rounded-md mt-5">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default FormReview;
