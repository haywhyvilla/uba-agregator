import styles from "./channels.module.scss";
import addIcon from "@/src/assets/addIcon2.svg";
import Image from "next/image";
import React, { useState } from 'react'
import { LogoutIcon } from '@/src/utility/svg'
import { Dropdown, Space, Modal, Form, Button, Spin, Input, } from 'antd';
import Link from "next/link";


const Channels = () => {

    const [addChannels, setAddChannels] = useState(false)

    const items = [
        {
            key: '1',
            label: (
                <div
                    onClick={() => {
                        setAddChannels(true);
                    }}
                    className={styles.addIcon2}
                >
                    {LogoutIcon} Add Channel
                </div>
            ),
        },
    ];

    const cards = [
        {
            id: 1, title: "USSD", amount: "185,700", status: true, rate: "4.8%", svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.37653 5.61575L11.7749 5.61575L11.7749 10.0141" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.61577 11.7749L11.7134 5.67725" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            id: 2, title: "INTERNET BANKING", amount: "985", status: false, rate: "1.2%", svg: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path d="M12.5058 7.37659L12.5058 11.775L8.10744 11.775" stroke="#E6A960" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.34673 5.61577L12.4443 11.7134" stroke="#E6A960" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            id: 3, title: "VERICASH", amount: "185.7k", status: true, rate: "4.8%", svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.37653 5.61575L11.7749 5.61575L11.7749 10.0141" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.61577 11.7749L11.7134 5.67725" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },

        {
            id: 1, title: "FACENOTE", amount: "185,700", status: true, rate: "4.8%", svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.37653 5.61575L11.7749 5.61575L11.7749 10.0141" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.61577 11.7749L11.7134 5.67725" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            id: 2, title: "UBANQUITY", amount: "985", status: false, rate: "1.2%", svg: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path d="M12.5058 7.37659L12.5058 11.775L8.10744 11.775" stroke="#E6A960" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.34673 5.61577L12.4443 11.7134" stroke="#E6A960" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            id: 3, title: "DIASPORA", amount: "185.7k", status: true, rate: "4.8%", svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.37653 5.61575L11.7749 5.61575L11.7749 10.0141" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.61577 11.7749L11.7134 5.67725" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
    ]

    return (
        <section className={styles.dashboard}>
            <div className={styles.card}>
                {
                    cards.map((cardy, index) => (
                        <Link className={styles.eachcard} key={index} href={`/dashboard/${cardy.id}`}>
                            <p>{cardy.title}</p>
                            <div className={styles.cardFlex}>
                                {
                                    cardy.id == 1 && <svg className={styles.nariaSvg} xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                        <path d="M20 11.1043H17.2222V8.88342H20C20.2947 8.88342 20.5773 8.76643 20.7857 8.55818C20.9941 8.34994 21.1111 8.0675 21.1111 7.77299C21.1111 7.47849 20.9941 7.19605 20.7857 6.9878C20.5773 6.77956 20.2947 6.66256 20 6.66256H17.2222V1.11043C17.2222 0.815924 17.1052 0.533482 16.8968 0.325237C16.6884 0.116991 16.4058 0 16.1111 0C15.8164 0 15.5338 0.116991 15.3254 0.325237C15.1171 0.533482 15 0.815924 15 1.11043V6.66256H10.3667L8.14445 1.36583C7.94031 0.902631 7.58398 0.523017 7.13447 0.289854C6.68497 0.0566906 6.16926 -0.0160341 5.67275 0.083725C5.17624 0.183484 4.72872 0.449742 4.4043 0.838401C4.07989 1.22706 3.89805 1.7148 3.88889 2.22085V6.66256H1.11111C0.816426 6.66256 0.533811 6.77956 0.325437 6.9878C0.117063 7.19605 0 7.47849 0 7.77299C0 8.0675 0.117063 8.34994 0.325437 8.55818C0.533811 8.76643 0.816426 8.88342 1.11111 8.88342H3.88889V11.1043H1.11111C0.816426 11.1043 0.533811 11.2213 0.325437 11.4295C0.117063 11.6378 0 11.9202 0 12.2147C0 12.5092 0.117063 12.7916 0.325437 12.9999C0.533811 13.2081 0.816426 13.3251 1.11111 13.3251H3.88889V18.8773C3.88889 19.1718 4.00595 19.4542 4.21433 19.6625C4.4227 19.8707 4.70532 19.9877 5 19.9877C5.29469 19.9877 5.5773 19.8707 5.78567 19.6625C5.99405 19.4542 6.11111 19.1718 6.11111 18.8773V13.3251H10.7444L12.9667 18.6219C13.1344 19.0236 13.4165 19.3673 13.778 19.6101C14.1395 19.8529 14.5644 19.9842 15 19.9877C15.1477 20.0041 15.2968 20.0041 15.4444 19.9877C15.9539 19.8839 16.4109 19.6048 16.7357 19.199C17.0605 18.7932 17.2327 18.2864 17.2222 17.7668V13.3251H20C20.2947 13.3251 20.5773 13.2081 20.7857 12.9999C20.9941 12.7916 21.1111 12.5092 21.1111 12.2147C21.1111 11.9202 20.9941 11.6378 20.7857 11.4295C20.5773 11.2213 20.2947 11.1043 20 11.1043ZM15 8.88342V11.1043H12.2222L11.3 8.88342H15ZM6.11111 2.22085L7.96667 6.66256H6.11111V2.22085ZM6.11111 11.1043V8.88342H8.88889L9.81111 11.1043H6.11111ZM15 17.7668L13.1444 13.3251H15V17.7668Z" fill="#313638" />
                                    </svg>
                                }
                                <h2>{cardy.amount}</h2>
                            </div>
                            <p>{cardy.title}</p>
                            <div className={styles.cardFlex}>
                                {
                                    cardy.id == 1 && <svg className={styles.nariaSvg} xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                        <path d="M20 11.1043H17.2222V8.88342H20C20.2947 8.88342 20.5773 8.76643 20.7857 8.55818C20.9941 8.34994 21.1111 8.0675 21.1111 7.77299C21.1111 7.47849 20.9941 7.19605 20.7857 6.9878C20.5773 6.77956 20.2947 6.66256 20 6.66256H17.2222V1.11043C17.2222 0.815924 17.1052 0.533482 16.8968 0.325237C16.6884 0.116991 16.4058 0 16.1111 0C15.8164 0 15.5338 0.116991 15.3254 0.325237C15.1171 0.533482 15 0.815924 15 1.11043V6.66256H10.3667L8.14445 1.36583C7.94031 0.902631 7.58398 0.523017 7.13447 0.289854C6.68497 0.0566906 6.16926 -0.0160341 5.67275 0.083725C5.17624 0.183484 4.72872 0.449742 4.4043 0.838401C4.07989 1.22706 3.89805 1.7148 3.88889 2.22085V6.66256H1.11111C0.816426 6.66256 0.533811 6.77956 0.325437 6.9878C0.117063 7.19605 0 7.47849 0 7.77299C0 8.0675 0.117063 8.34994 0.325437 8.55818C0.533811 8.76643 0.816426 8.88342 1.11111 8.88342H3.88889V11.1043H1.11111C0.816426 11.1043 0.533811 11.2213 0.325437 11.4295C0.117063 11.6378 0 11.9202 0 12.2147C0 12.5092 0.117063 12.7916 0.325437 12.9999C0.533811 13.2081 0.816426 13.3251 1.11111 13.3251H3.88889V18.8773C3.88889 19.1718 4.00595 19.4542 4.21433 19.6625C4.4227 19.8707 4.70532 19.9877 5 19.9877C5.29469 19.9877 5.5773 19.8707 5.78567 19.6625C5.99405 19.4542 6.11111 19.1718 6.11111 18.8773V13.3251H10.7444L12.9667 18.6219C13.1344 19.0236 13.4165 19.3673 13.778 19.6101C14.1395 19.8529 14.5644 19.9842 15 19.9877C15.1477 20.0041 15.2968 20.0041 15.4444 19.9877C15.9539 19.8839 16.4109 19.6048 16.7357 19.199C17.0605 18.7932 17.2327 18.2864 17.2222 17.7668V13.3251H20C20.2947 13.3251 20.5773 13.2081 20.7857 12.9999C20.9941 12.7916 21.1111 12.5092 21.1111 12.2147C21.1111 11.9202 20.9941 11.6378 20.7857 11.4295C20.5773 11.2213 20.2947 11.1043 20 11.1043ZM15 8.88342V11.1043H12.2222L11.3 8.88342H15ZM6.11111 2.22085L7.96667 6.66256H6.11111V2.22085ZM6.11111 11.1043V8.88342H8.88889L9.81111 11.1043H6.11111ZM15 17.7668L13.1444 13.3251H15V17.7668Z" fill="#313638" />
                                    </svg>
                                }
                                <h2>{cardy.amount}</h2>
                            </div>

                            <p>{cardy.title}</p>
                            <div className={styles.cardFlex}>
                                {
                                    cardy.id == 1 && <svg className={styles.nariaSvg} xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                        <path d="M20 11.1043H17.2222V8.88342H20C20.2947 8.88342 20.5773 8.76643 20.7857 8.55818C20.9941 8.34994 21.1111 8.0675 21.1111 7.77299C21.1111 7.47849 20.9941 7.19605 20.7857 6.9878C20.5773 6.77956 20.2947 6.66256 20 6.66256H17.2222V1.11043C17.2222 0.815924 17.1052 0.533482 16.8968 0.325237C16.6884 0.116991 16.4058 0 16.1111 0C15.8164 0 15.5338 0.116991 15.3254 0.325237C15.1171 0.533482 15 0.815924 15 1.11043V6.66256H10.3667L8.14445 1.36583C7.94031 0.902631 7.58398 0.523017 7.13447 0.289854C6.68497 0.0566906 6.16926 -0.0160341 5.67275 0.083725C5.17624 0.183484 4.72872 0.449742 4.4043 0.838401C4.07989 1.22706 3.89805 1.7148 3.88889 2.22085V6.66256H1.11111C0.816426 6.66256 0.533811 6.77956 0.325437 6.9878C0.117063 7.19605 0 7.47849 0 7.77299C0 8.0675 0.117063 8.34994 0.325437 8.55818C0.533811 8.76643 0.816426 8.88342 1.11111 8.88342H3.88889V11.1043H1.11111C0.816426 11.1043 0.533811 11.2213 0.325437 11.4295C0.117063 11.6378 0 11.9202 0 12.2147C0 12.5092 0.117063 12.7916 0.325437 12.9999C0.533811 13.2081 0.816426 13.3251 1.11111 13.3251H3.88889V18.8773C3.88889 19.1718 4.00595 19.4542 4.21433 19.6625C4.4227 19.8707 4.70532 19.9877 5 19.9877C5.29469 19.9877 5.5773 19.8707 5.78567 19.6625C5.99405 19.4542 6.11111 19.1718 6.11111 18.8773V13.3251H10.7444L12.9667 18.6219C13.1344 19.0236 13.4165 19.3673 13.778 19.6101C14.1395 19.8529 14.5644 19.9842 15 19.9877C15.1477 20.0041 15.2968 20.0041 15.4444 19.9877C15.9539 19.8839 16.4109 19.6048 16.7357 19.199C17.0605 18.7932 17.2327 18.2864 17.2222 17.7668V13.3251H20C20.2947 13.3251 20.5773 13.2081 20.7857 12.9999C20.9941 12.7916 21.1111 12.5092 21.1111 12.2147C21.1111 11.9202 20.9941 11.6378 20.7857 11.4295C20.5773 11.2213 20.2947 11.1043 20 11.1043ZM15 8.88342V11.1043H12.2222L11.3 8.88342H15ZM6.11111 2.22085L7.96667 6.66256H6.11111V2.22085ZM6.11111 11.1043V8.88342H8.88889L9.81111 11.1043H6.11111ZM15 17.7668L13.1444 13.3251H15V17.7668Z" fill="#313638" />
                                    </svg>
                                }
                                <h2>{cardy.amount}</h2>
                            </div>

                        </Link>
                    ))
                }

            </div>

            <Dropdown
                menu={{
                    items,
                }}
                overlayClassName="logout-icon"
            >
                <a onClick={() => {
                    setAddChannels(true);
                }}>
                    <Space>
                        <Image src={addIcon} alt="add icon" width={100} height={100} className={styles.addIcon} />
                    </Space>
                </a>
            </Dropdown>

            {/* add user modal */}

            <Modal
                centered
                open={addChannels}
                onOk={() => setAddChannels(false)}
                onCancel={() => setAddChannels(false)}
                className="our-modal add-page-modal"
                footer={null}
            >
                <div style={{ textAlign: "center" }}>
                    <h4 style={{ fontSize: "3rem" }}>Add New Channel</h4>
                    <p>Fill the fields below to add a new channel</p>
                </div>
                <Form layout="vertical">
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <Form.Item name="first_name" label="Channel Name" className="heights">
                            <Input placeholder="Enter Channel name" />
                        </Form.Item>

                        <Form.Item name="last_name" label="Channel Code" className="heights">
                            <Input placeholder="Enter Channel Code" />
                        </Form.Item>
                    </div>

                    <Form.Item name="phone_number" label="Vendor Aggregator Code" className="heights">
                        <Input placeholder="Enter Vendor Aggregator Code" />
                    </Form.Item>

                    <Form.Item name="email" label="Last Switch Date" className="heights">
                        <Input placeholder="Enter Last Switch Date" type="email" />
                    </Form.Item>

                    <Form.Item name="email" label="Failure Threshold" className="heights">
                        <Input placeholder="Enter Failure Threshold" type="email" />
                    </Form.Item>

                    <Form.Item name="email" label="Number of minutes" className="heights">
                        <Input placeholder="Enter Number of minutes" type="email" />
                    </Form.Item>

                    <Form.Item name="email" label="Data aggregation Code" className="heights">
                        <Input placeholder="Enter Data aggregation Code" type="email" />
                    </Form.Item>

                    {/* <Form.Item name="entity_id" label="Entity">
            <Select
              style={{
                width: '100%',
              }}
              onChange={handleChange}
              options={[
                {
                  value: 1,
                  label: 'CBN',
                },
                {
                  value: 2,
                  label: 'NPF',
                },
                {
                  value: 3,
                  label: 'VIGILANT',
                },
                {
                  value: 4,
                  label: 'BANK',
                },
              ]}
            />
          </Form.Item> */}

                    {/* <Form.Item name="role_id" label="Role access">
            <Select
              onChange={handleChange}
              options={[
                {
                  value: 1,
                  label: 'CBN',
                },
                {
                  value: 2,
                  label: 'Vigilant Customer Service',
                },
                {
                  value: 3,
                  label: 'NPF investigator',
                },
                {
                  value: 4,
                  label: 'Bank Fraud Desk',
                },
                {
                  value: 5,
                  label: 'Bank Treasury',
                },
                {
                  value: 6,
                  label: 'Bank Internal Control',
                },
                {
                  value: 7,
                  label: 'Bank Risk',
                },
                {
                  value: 8,
                  label: 'Bank Account',
                },
                {
                  value: 9,
                  label: 'Bank Internal Audit',
                },
                {
                  value: 10,
                  label: 'NPF prosecutor',
                },
                {
                  value: 10,
                  label: 'Bank Internal Control',
                },
              ]}
            />
          </Form.Item> */}

                    <div className="pt-lg-5 pt-4">
                        <Button
                            htmlType="submit"
                            style={{ background: '#7D0003', color: '#FFF' }}
                        >

                            <> Add Channel</>

                        </Button>
                    </div>

                    {/* <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 mt-4 mb-4"
          >
            Add Member
          </Button> */}
                </Form>
            </Modal>


        </section>
    )
}

export default Channels