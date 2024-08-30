import { IoIosSend } from 'react-icons/io'
import emailjs from '@emailjs/browser'
import * as yup from 'yup'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import Popup from '../components/ContactSubmitPopup'

emailjs.init('yKa48bbuNsDFFFVWj');

const contactSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
})

const Contact = () => {
    const form = useRef()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(contactSchema),
    })

    const [submitted, setSubmitted] = useState(false)

    const submitForm = () => {
        emailjs
            .sendForm(
                'service_2erb6sr', 'template_en8166k', form.current
            )
            .then(
                function (response) {
                    setSubmitted(true)
                    reset()
                    // console.log('SUCCESS!', response.status, response.text)
                },
                function (error) {
                    console.log('FAILED DID NOT SEND MESSAGE...', error)
                }
            )
    }
    return (
        <div className='flex items-center'>
            <Head>
                <title>Contact | Mohammed Fatheen Ahmed</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4054073151944400"
     crossorigin="anonymous"></script>
            </Head>
            <div className='h-screen max-w-screen-xl px-4 py-16 mx-auto md:pt-32 md:p-20'>
                <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
                    <div className='lg:col-span-2'>
                        <h1 className='font-bold text-6xl text-blue-500 pt-20'>
                            Let&#39;s Talk
                        </h1>
                        <p className='max-w-xl text-lg pt-4'>
                            Have any questions? <br />I respond
                            quickly. <br />
                            <br />
                            Ways to get in touch <br />
                            LinkedIn:{' '}
                            <a
                                className='text-blue-500 hover:underline'
                                href='https://www.linkedin.com/in/fatheenillinois'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                /in/fatheenillinois/
                            </a>{' '}
                            <br />
                            Email:{' '}
                            <a
                                className='text-blue-500 hover:underline'
                                href='mailto:textfathcs@gmail.com'
                            >
                                textfathcs@gmail.com
                            </a>
                                    <br />
                                   
                        </p>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default Contact
