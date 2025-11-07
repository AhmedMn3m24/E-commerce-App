// 'use client'
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { LoginFormType } from './LoginTypes'
// import Loginsehema from './Loginsehema'
// import handleLogin from './Loginaction'
// import toast from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// export default function LoginForm() {
//     const router = useRouter();

//     const login = useForm({
//         resolver: zodResolver(Loginsehema),
//         defaultValues: {
//             email: '',
//             password: '',

//         }
//     })
//     const { control, handleSubmit: formSubmit, register, formState: { errors } } = login;

//     async function onSubmit(data: LoginFormType) {
//         // console.log('data', data);
//         const isRegistered = await handleLogin(data);

//         if (isRegistered === true) {
//             toast.success('Welcome back!');
//             router.push('/');

//         } else {
//             toast.error(isRegistered, { duration: 4000 });
//         }
//     }







//     return (
//         <div className="w-1/2 mx-auto mt-8">
//             <Form {...login}>
//                 <form onSubmit={formSubmit(onSubmit)} className="space-y-4">


//                     <FormField
//                         control={control}
//                         name="email"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Email</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Enter your email" type="email" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     <FormField
//                         control={control}
//                         name="password"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Password</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Enter your password" type="password" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />


//                     <Link href="/" className="text-sm text-blue-500 hover:underline flex justify-center mt-2">
//                         <Button type="submit" className="w-full mt-4 bg-red-600 hover:bg-red-700 cursor-pointer">
//                             Create New Account
//                         </Button>
//                     </Link>
//                 </form>

//             </Form>
//         </div>
//     )
// }

'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormType } from './LoginTypes'
import Loginsehema from './Loginsehema'
import handleLogin from './Loginaction'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
export default function LoginForm() {
    const router = useRouter();

    const login = useForm({
        resolver: zodResolver(Loginsehema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const { control, handleSubmit: formSubmit } = login;

    async function onSubmit(data: LoginFormType) {

        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        })
        if (res?.ok) {
            toast.success('Welcome back!');
            // window.location.href = '/';
            router.push('/');


        } else {
            toast.error('Invalid email or password', { duration: 4000 });
        }
        console.log('SignIn Response:', res);

        // const isRegistered = await handleLogin(data);

        // if (isRegistered === true) {
        //     toast.success('Welcome back!');
        //     router.push('/');
        // } else {
        //     toast.error(isRegistered, { duration: 4000 });
        // }
    }

    return (
        <div className="w-1/2 mx-auto mt-8">
            <Form {...login}>
                <form onSubmit={formSubmit(onSubmit)} className="space-y-4">

                    <FormField
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full mt-4 bg-red-600 hover:bg-red-700 cursor-pointer">
                        Login
                    </Button>

                    <p className="text-center mt-2 text-sm">
                        Don’t have an account?
                        <Link href="/" className="text-blue-500 hover:underline ml-1">
                        </Link>
                    </p>

                </form>
            </Form>
        </div>
    )
}


