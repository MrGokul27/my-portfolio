import react from "react";
import "../css/tools.css";
import toolsImage1 from "../images/my-tools-bgRemove.png";
import toolsImage2 from "../images/my-tools-qrCode.png";
const Tools = () => {
    const tools = [
        { image: toolsImage1, title: "Background Remove", link: "https://background-remover-nu.vercel.app/" },
        { image: toolsImage2, title: "QR Code Generator", link: "https://qr-code-generator-gamma-woad.vercel.app/" },
    ];
    return (
        <>
            <section id="tools" className="tools-section p-lg-5 p-3 pb-md-0 pb-5 bebasNeue">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center bradleyHand">
                            <h1 className="section-heading-underline">My Tools</h1>
                            <p className="mt-4">
                                As a passionate frontend developer, I rely on a powerful set of tools to craft seamless, interactive, and visually appealing web experiences.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3 mb-5 justify-content-center">
                        {tools.map((tool, index) => (
                            <div key={index} className="col-md-3 col-6 d-flex justify-content-center tools-sec-card">
                                <a
                                    href={tool.link || "#"}
                                    target={tool.link ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="text-decoration-none"
                                >
                                    <div className="card tools-card mt-4 border-0 rounded-0 d-flex flex-column justify-content-center align-items-center">
                                        <img
                                            src={tool.image}
                                            alt={tool.title}
                                            className="img-fluid mb-2 w-50"
                                        />
                                        <p className="mb-0">{tool.title}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tools;