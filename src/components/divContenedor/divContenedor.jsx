import { useState } from 'react';
import { Formik, Field, Form } from 'formik';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Box,
    Flex

} from '@chakra-ui/react'

function DivContenedor() {

    //Nombre y apellido
    function validateName(value) {
        let error
        if (!value) {
            error = 'Debe ingresar un nombre'
        }
        return error
    }
    function validateLastName(value) {
        let error
        if (!value) {
            error = 'Debe ingresar un Apellido'
        }
        return error
    }



    //Email
    const [inputEmail, setInputEmail] = useState('Ingrese su Email.');

    const [isError, setIsError] = useState(false);
    const handleInputEmailChange = (e) => {
        const inputEmailValue = e.target.value;
        setInputEmail(inputEmailValue);

        const isValid = validateEmail(inputEmailValue);
        setIsError(!isValid);
    };
    const validateEmail = (value) => {

        return value.includes('@');
    };

    //Telefono
    const [error, setError] = useState(false);
    const [inputTel, setInputTel] = useState('Ingrese su Tel.');


    const handleInputTelChange = (e) => {
        const inputTelValue = e.target.value;
        setInputTel(inputTelValue);

        const isValid = validateTel(inputTelValue)
        setError(!isValid);
    };

    const validateTel = (value) => {
        let error;

        if (/^\d+$/.test(value)) {
            error = 'El número de teléfono debe contener solo dígitos.';
        }

        return error;
    }

    //Contraseña

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    let contraseña1, contraseña2;
    const validateContraseña = (value) => {
        contraseña1 = value;
        let error
        if (!value) {
            error = 'Deben Coincidir las Contraseñas'
        }
        return error
    };
    const validateConfirmarContraseña = (value) => {
        let error;
        contraseña2 = value;
        if (contraseña1 !== contraseña2) {
            error = 'Las contraseñas no coinciden.';
        }

        return error;
    };



    return (
        <Flex align="center" justify="center" minHeight="70vh" >
            <Box width={{ base: 'sm', lg: 'lg' }}
                maxW={{ base: 'full', lg: 'container.lg' }}>
                <Formik
                    initialValues={{ name: 'Nombre/s', lastName: 'Apellido/s', email: 'example@hotmail.com', contraseña: '', contraseñaConfirm: '' }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {(props) => (
                        <Form>
                            <Field name='name' validate={validateName}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name} mb={4}>
                                        <FormLabel>Nombre/s</FormLabel>
                                        <Input {...field} placeholder='Nombre/s' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='lastName' validate={validateLastName} mb={4}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                                        <FormLabel>Apellido/s</FormLabel>
                                        <Input {...field} placeholder='Apellido/s' />
                                        <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <FormControl isInvalid={isError} mb={4} >
                                <FormLabel>Email</FormLabel>
                                <Input type='email' value={inputEmail} onChange={handleInputEmailChange} />

                                <FormErrorMessage >Debe ingresar un Email válido.</FormErrorMessage>

                            </FormControl>

                            <FormControl isInvalid={error} mb={4}>
                                <FormLabel>Teléfono</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children='+54' />
                                    <Input type='tel' placeholder='Teléfono' value={inputTel} onChange={handleInputTelChange} />
                                </InputGroup>

                                <FormErrorMessage>Debe ingresar un número de teléfono válido.</FormErrorMessage>

                            </FormControl>

                            <Field name='contraseña' validate={validateContraseña}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.contraseña && form.touched.contraseña} mb={4}>
                                        <FormLabel>Contraseña</FormLabel>
                                        <InputGroup size='md'>
                                            <Input
                                                {...field}
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Ingrese su contraseña'
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                    {show ? 'Hide' : 'Show'}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.contraseña}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='contraseñaConfirm' validate={validateConfirmarContraseña}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.confirmarContraseña && form.touched.confirmarContraseña} mb={4}>
                                        <FormLabel>Confirmar Contraseña</FormLabel>
                                        <InputGroup size='md'>
                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Confirme su contraseña'
                                                {...field}
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                    {show ? 'Hide' : 'Show'}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.confirmarContraseña}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Button
                                mt={4}
                                colorScheme='teal'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}

export default DivContenedor;
