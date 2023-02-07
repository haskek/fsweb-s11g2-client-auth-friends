import { useForm } from "react-hook-form";
import axios from "axios";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmitLogin = (data) => {
    const config = {
      method: "post",
      url: "http://localhost:9005/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };
    axios(config)
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    /* axios
      .post("http://localhost9005/api/login/", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => JSON.parse(console.log(res.data)))
      .catch((err) => console.log(err));
	  */
  };

  const token = localStorage.getItem("s11g2etut");

  //   axios.create({
  //     headers: {
  //       Authorization: token,
  //     },
  //   });

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <div>
          <input
            type="text"
            placeholder="username"
            {...register("username", { required: "Bu alan zorunludur." })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: "Bu alan zorunludur." })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
