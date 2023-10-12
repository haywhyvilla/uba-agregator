"use client"
import Image from "next/image";
import React, { useState, useContext, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { ArrowRight } from "@/src/utility/svg";
import { toast } from 'sonner';
import styles from "./signIn.module.scss"
import ablogo from "@/src/assets/AB-logo.jpg";


const SignIn = () => {
    return (

        <div className={styles.loginPage}>

            <div className={styles.row}>
                <div class={styles.colAuto}>
                    <Form
                        name="basic"
                        style={{
                            maxWidth: '100%',
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        //
                        //
                        autoComplete="off"
                        layout="vertical"
                    >
                        <div className={styles.logoWrapper}>
                            <Image
                                src={ablogo}
                                width={120}
                                height={60}
                                alt="uba Logo"
                                quality={100}
                                priority={true}
                            />

                        </div>
                        <p>Enter email & password.</p>

                        <Form.Item
                            label="Email address"
                            className={'username-input'}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type: 'email',
                                    message: 'Please input a valid email address!',
                                },
                            ]}
                        >
                            <Input placeholder="Input email" />
                        </Form.Item>


                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                placeholder="Input password"
                                autoComplete="current-password"
                            />
                        </Form.Item>

                        <Form.Item className={styles.buttonWrapper}>
                            <Button
                                htmlType="submit"
                                style={{ paddingTop: '6px' }}
                                className={styles.antBtn}
                            >

                                <>Log In {ArrowRight}</>

                            </Button>
                        </Form.Item>


                    </Form>

                </div>
            </div>

        </div>
    )
}

export default SignIn