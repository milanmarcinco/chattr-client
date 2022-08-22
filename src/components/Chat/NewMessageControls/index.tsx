import { useForm, SubmitHandler } from "react-hook-form";
import useStore from "@/store";
import ChevronUpIcon from "../../../assets/chevron-up.svg";
import styles from "./NewMessageControls.module.scss";

interface IFormFields {
  content: string;
}

const NewMessageControls = () => {
  const { register, handleSubmit, reset } = useForm<IFormFields>();

  const sendMessage = useStore((state) => state.sendMessage);

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    sendMessage(data.content);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.newMessageControls}>
      <div className={styles.inputWrapper}>
        <input {...register("content", { required: true })} id="content" className={styles.input} type="text" />
      </div>
      <button className={styles.button} type="submit">
        <ChevronUpIcon />
      </button>
    </form>
  );
};

export default NewMessageControls;
