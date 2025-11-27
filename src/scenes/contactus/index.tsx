import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText';
import { useForm } from 'react-hook-form'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const handleSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }

    const inputStyle = 'w-full rounded-lg bg-[var(--primary-300)] px-5 py-3 placeholder-white';

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div
            className='md: w-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount : 0.5,}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0,x : -100},
                visible: {opacity: 1,x: 0}
            }}>
                <HText>
                    <span className='text-[var(--primary-500)]'>JOIN NOW</span>{" "}TO GET IN SHAPE
                </HText>
                <p className='my-5'>
                Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
            </motion.div>
            {/* FORM AND IMAGE */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div className='mt-10 basis-3/5 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount : 0.5,}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0,x : 50},
                    visible: {opacity: 1,x: 0}
                }}>
                    <form onSubmit={handleSubmit} 
                    target='_blank'
                    method="POST"
                    action="https://formatsubmit.com/nkojbagar4@gmail.com">
                        <input type="text" 
                            className={inputStyle}
                            placeholder='NAME'
                            {...register('name',{
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-[var(--primary-500)]'>
                                {errors.name.type === 'required' && 'This Field is required'}
                                {errors.name.type === 'maxLength' && 'Max Length is 100 character'}
                            </p>
                        )}
                        <input type="text" 
                            className={`${inputStyle} mt-4`}
                            placeholder='EMAIL'
                            {...register('email',{
                                required: true,
                                pattern: /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-[var(--primary-500)]'>
                                {errors.email.type === 'required' && 'This Field is required'}
                                {errors.email.type === 'pattern' && 'Invalid Email Adress '}
                            </p>
                        )}
                
                        <textarea
                            className={`${inputStyle} mt-4 py-10`}
                            placeholder='MESSAGE'
                            rows={4}
                            cols={50}
                            {...register('message',{
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className='mt-1 text-[var(--primary-500)]'>
                                {errors.message.type === 'required' && 'This Field is required'}
                                {errors.message.type === 'maxLength' && 'Max Length is 2000 character'}
                            </p>
                        )}
                        <button type='submit' className='mt-5 rounded-lg bg-[var(--secondary-500)] px-20 py-3 transition duration-500 hover:text-white'>
                            Submit
                        </button>
                    </form>
                </motion.div>
                <motion.div
                className='relative mt-16 basis-2/5 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount : 0.5,}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0,x : 50},
                    visible: {opacity: 1,x: 0}
                }}
                >
                    <div className='before:absolute before:-bottom-20 before:-right-20 before:z-[-1] content-evolvetext'>
                            <img src={ContactUsPageGraphic} alt="Contact Page Graphic" className='w-full'/>
                        </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs