import React from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import emailjs from "@emailjs/browser";
import "../css/contact.css";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values: ", values);

    // EmailJS send form data
    emailjs
      .send(
        "service_4ml3pkw",
        "template_7i4k7oa",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          message: values.message,
        },
        "CWf2hncSbboocvCXN"
      )
      .then(
        () => {
          message.success("Message sent successfully!");
          form.resetFields();
        },
        (error) => {
          console.error("Failed to send email:", error);
          message.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section p-lg-5 p-3 pb-md-0 pb-5 bebasNeue">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bradleyHand">
            <h1 className="section-heading-underline">CONTACT ME</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="form-curve my-md-5">
              <Form
                form={form}
                name="contact_form"
                onFinish={onFinish}
                layout="vertical"
                className="contact-form p-md-5 p-3"
              >
                {/* First Name and Last Name Fields */}
                <Row gutter={[{ xs: 16, sm: 24, md: 32, lg: 50, xl: 150 }, 16]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="FIRST NAME"
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="LAST NAME"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Email and Phone Number Fields */}
                <Row gutter={[{ xs: 16, sm: 24, md: 32, lg: 50, xl: 150 }, 16]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="EMAIL ID"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please input a valid email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="PHONE NUMBER"
                      name="phoneNumber"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Message Field */}
                <Row gutter={[{ xs: 16, sm: 24, md: 32, lg: 50, xl: 150 }, 16]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="MESSAGE"
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please input your message!",
                        },
                      ]}
                    >
                      <Input.TextArea rows={1} />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Submit Button */}
                <Row gutter={[{ xs: 16, sm: 24, md: 32, lg: 50, xl: 150 }, 16]} className="align-items-center">
                  <Col xs={24} md={12}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="contact-submit-btn w-100 py-3 mt-5"
                      >
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} className="text-md-end text-center">
                    <div className="social-icons mt-3">
                      <a
                        href="https://www.linkedin.com/in/gokulanath-jp-464465261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="https://github.com/MrGokul27?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/mr_gokul_27/profilecard/?igsh=d3JveXd5dXAzZmZj"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://wa.me/qr/OXQMTD3OIV24G1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
