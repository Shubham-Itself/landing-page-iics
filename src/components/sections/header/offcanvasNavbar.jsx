import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Navigation data structure
const navigationData = [
    {
        label: "Programs",
        href: "#programContainer",
        hasDropdown: false,
        dropdownItems: [
            { label: "AI Image Generator", href: "/",},
            { label: "AI Text Generator", href: "/home-two" },
            { label: "AI Developers Profile", href: "/home-three" },
            { label: "AI Chatbot", href: "/home-four" },
        ],
        isActive: true,
    },
    {
        label: "Why Choose Us",
        href: "#chooseContainer",
        hasDropdown: false,
    },
    {
        label: "About IICS",
        href: "#aboutContainer",
        hasDropdown: false,
        dropdownItems: [
            { label: "Portfolio", href: "/portfolio" },
            { label: "Portfolio Details", href: "/portfolio-details" },
        ],
    },
    {
        label: "Industry Mentors",
        href: "#industryContainer",
        hasDropdown: false,
        dropdownItems: [
            { label: "Services", href: "/services" },
            { label: "Services Details", href: "/services-details" },
        ],
    },
   
    {
        label: "Admission Process",
        href: "#admissionContainer",
        hasDropdown: false,
        dropdownItems: [
            { label: "Blog Standard", href: "/blog-standard" },
            { label: "Blog Grid", href: "/blog" },
            { label: "Blog Right Sidebar", href: "/blog-sidebar" },
            { label: "Blog Details", href: "/blog-details" },
        ],
    },
    {
        label: "FAQs",
        href: "#faqContainer",
        hasDropdown: false,
    },
];

const ResponsiveNavbar = () => {
    const [openAccordions, setOpenAccordions] = useState({});
    const [openNestedAccordions, setOpenNestedAccordions] = useState({});

    const toggleAccordion = (id) => {
        setOpenAccordions(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleNestedAccordion = (parentId, childId) => {
        setOpenNestedAccordions(prev => ({
            ...prev,
            [`${parentId}-${childId}`]: !prev[`${parentId}-${childId}`]
        }));

        // Prevent event bubbling
        event.stopPropagation();
    };

    return (
        <div className="responsive-navbar offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="navbarOffcanvas">
            <div className="offcanvas-header">
                <Link className="logo d-inline-block" to="/">
                   <img src="img/IICS/iics_image/logo_main_white.webp" className='w-[200px] ml-[-10px]' alt="" />
                </Link>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="accordion" id="navbarAccordion">
                    {navigationData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            {item.hasDropdown ? (
                                <>
                                    <button
                                        className={`accordion-button collapsed ${item.isActive ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={openAccordions[index]}
                                    >
                                        {item.label}
                                    </button>
                                    <div
                                        className={`accordion-collapse collapse ${openAccordions[index] ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            <div className="accordion" id={`navbarAccordion${index + 1}`}>
                                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                    <div className="accordion-item" key={dropdownIndex}>
                                                        {dropdownItem.hasDropdown && dropdownItem.nestedDropdown ? (
                                                            <>
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    type="button"
                                                                    onClick={() => toggleNestedAccordion(index, dropdownIndex)}
                                                                    aria-expanded={openNestedAccordions[`${index}-${dropdownIndex}`]}
                                                                >
                                                                    {dropdownItem.label}
                                                                </button>
                                                                <div
                                                                    className={`accordion-collapse collapse ${openNestedAccordions[`${index}-${dropdownIndex}`] ? 'show' : ''}`}
                                                                >
                                                                    <div className="accordion-body">
                                                                        <div className="accordion" id={`navbarAccordion${index}${dropdownIndex}`}>
                                                                            {dropdownItem.nestedDropdown.map((nestedItem, nestedIndex) => (
                                                                                <div className="accordion-item" key={nestedIndex}>
                                                                                    <Link to={nestedItem.href} className="accordion-link">
                                                                                        {nestedItem.label}
                                                                                    </Link>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                to={dropdownItem.href}
                                                                className={`accordion-link ${dropdownItem.isActive ? 'active' : ''}`}
                                                            >
                                                                {dropdownItem.label}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link to={item.href} className="accordion-link without-icon">
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <div className="offcanvas-contact-info">
                    <h4>Follow On</h4>
                    <ul className="social-profile list-style">
                        <li><a href="https://www.facebook.com/IICSIndiaorg?mibextid=ZbWKwL"><i className='bx bxl-facebook'></i></a></li>
                        <li><a href="https://www.instagram.com/iicsindiaorg/"><i className='bx bxl-instagram'></i></a></li>
                        <li><a href="https://www.youtube.com/@IICSIndiaorg"><i className='bx bxl-youtube'></i></a></li>
                     
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNavbar;