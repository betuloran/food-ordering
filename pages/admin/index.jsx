import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { adminSchema } from "../../schema/admin";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
    const { push } = useRouter();

    const onSubmit = async (values, actions) => {
        console.log("🚀 Form submitted!", values); // Bu mesajı görüyor musunuz?

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/admin`,
                values
            );
            if (res.status === 200) {
                console.log(res.data);
                actions.resetForm();
                toast.success("Admin Login Success!");
                push("/admin/profile");
            }
        } catch (err) {
            console.log(err);
        }
    };
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            initialValues: {
                username: "",
                password: "",
            },
            onSubmit,
            //validationSchema: adminSchema,
        });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Your Username",
            value: values.username,
            errorMessage: errors.username,
            touched: touched.username,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
    ];

    return (
        <div className="container mx-auto py-3">
            <form
                className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
                onSubmit={handleSubmit}
            >
                <Title addClass="text-[40px] mb-6">Admin Login</Title>
                <div className="flex flex-col gap-y-3 w-full">
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))}
                </div>
                <div className="flex flex-col w-full gap-y-3 mt-6">
                    <button type="submit" className="btn-primary">LOGIN</button>
                    <Link href="/">
                        <span className="text-sm underline cursor-pointer text-secondary">
                            Home Page
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export const getServerSideProps = (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    if (myCookie.token === process.env.ADMIN_TOKEN) {
        return {
            redirect: {
                destination: "/admin/profile",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

export default Login;