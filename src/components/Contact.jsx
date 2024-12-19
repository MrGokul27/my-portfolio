import React from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import emailjs from "@emailjs/browser";
import "../css/contact.css";

const Contact = () => {
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
        },
        (error) => {
          console.error("Failed to send email:", error);
          message.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="form-curve my-md-5">
              <Form
                name="contact_form"
                onFinish={onFinish}
                layout="vertical"
                className="contact-form p-md-5 p-3"
              >
                {/* First Name and Last Name */}
                <Row gutter={[150, 16]}>
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

                {/* Email and Phone Number */}
                <Row gutter={[150, 16]}>
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

                {/* Message */}
                <Row gutter={[150, 16]}>
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
                <Row gutter={[150, 16]} className="align-items-center">
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
                    <div className="social-icons">
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
                        href="https://www.instagram.com/yourprofile"
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
