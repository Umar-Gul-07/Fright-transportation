const ContactInfo = {
    contact_phone: "+92 307 5061710",
    contact_email_yahoo: "jabbiinternational@yahoo.com",
    contact_email: "jabbiinternational@yahoo.com",
    whatsapp: "+92 307 5061710",
    address: "2-F, P.E.C.H.S Block-6, Near Delhi Sweets, Shahrah e Faisal, Karachi",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1234567890123!2d67.0615054!3d24.8597325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9c7ac77bb7%3A0x825356c82a1f6a16!2sDelhi%20Sweets!5e0!3m2!1sen!2spk!4v1234567890123",
    googleMapsFallback: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1234567890123!2d67.0615054!3d24.8597325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9c7ac77bb7%3A0x825356c82a1f6a16!2sDelhi%20Sweets!5e0!3m2!1sen!2spk!4v1234567890123",
    staticMapUrl: "https://maps.googleapis.com/maps/api/staticmap?center=24.8597325,67.0615054&zoom=16&size=600x400&markers=color:red%7Clabel:D%7C24.8597325,67.0615054&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    googleMapsDirectUrl: "https://www.google.com/maps/place/Delhi+Sweets/@24.8595252,67.0590029,16.64z/data=!4m6!3m5!1s0x3eb33e9c7ac77bb7:0x825356c82a1f6a16!8m2!3d24.8597325!4d67.0615054!16s%2Fg%2F11yvxcpch?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D",
    facebook: "https://www.facebook.com/jabbiinternational",
    twitter: "https://twitter.com/jabbiinternational",
    linkedin: "https://www.linkedin.com/company/jabbiinternational",
    instagram: "https://www.instagram.com/jabbiinternational",
    youtube: "https://www.youtube.com/@jabbiinternational",
}

// Social Media Links Component
const SocialMediaLinks = ({ className = "list-unstyled ps-0 mb-0 social-link" }) => {
    return (
        <ul className={className}>
            <li className="d-inline-block">
                <a href={ContactInfo.facebook} target="_blank" rel="noreferrer">
                    <i className="ph-bold ph-facebook-logo" />
                </a>
            </li>
            <li className="d-inline-block">
                <a href={ContactInfo.youtube} target="_blank" rel="noreferrer">
                    <i className="ph-fill ph-youtube-logo" />
                </a>
            </li>
            <li className="d-inline-block">
                <a href={ContactInfo.twitter} target="_blank" rel="noreferrer">
                    <i className="ph-fill ph-twitter-logo" />
                </a>
            </li>
            <li className="d-inline-block">
                <a href={ContactInfo.instagram} target="_blank" rel="noreferrer">
                    <i className="ph-bold ph-instagram-logo" />
                </a>
            </li>
            <li className="d-inline-block">
                <a href={ContactInfo.linkedin} target="_blank" rel="noreferrer">
                    <i className="ph-bold ph-linkedin-logo" />
                </a>
            </li>
        </ul>
    );
};

// WhatsApp Floating Button Component
const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        const message = "Hello! I'm interested in your freight transportation services.";
        const whatsappUrl = `https://wa.me/${ContactInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="whatsapp-float" onClick={handleWhatsAppClick}>
            <div className="whatsapp-icon">
                <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 1024 1024"
                    style={{ pointerEvents: "none", display: "block", height: 35, width: 35 }}
                >
                    <defs>
                        <path
                            id="htwasqicona-chat"
                            d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"
                        />
                    </defs>
                    <linearGradient
                        id="htwasqiconb-chat"
                        gradientUnits="userSpaceOnUse"
                        x1="512.001"
                        y1=".978"
                        x2="512.001"
                        y2="1025.023"
                    >
                        <stop offset={0} stopColor="#61fd7d" />
                        <stop offset={1} stopColor="#2bb826" />
                    </linearGradient>
                    <use
                        xlinkHref="#htwasqicona-chat"
                        overflow="visible"
                        fill="url(#htwasqiconb-chat)"
                        style={{ fill: 'url("#htwasqiconb-chat")' }}
                    />
                    <g>
                        <path
                            fill="#FFF"
                            d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"
                            style={{ fill: "rgb(255, 255, 255)" }}
                        />
                    </g>
                </svg>
            </div>
            <div className="whatsapp-tooltip">
                WhatsApp us
            </div>
        </div>
    );
};

// Updated team members for freight transportation company
const teamMembers = [
    {id:1, name: "Ahmed Jabbi", title: "CEO & Founder" },
    {id:2, name: "Muhammad Ali", title: "Operations Manager" },
    {id:3, name: "Fatima Khan", title: "Customer Relations" },
    {id:4, name: "Hassan Raza", title: "Logistics Coordinator" },
    {id:5, name: "Ayesha Malik", title: "Documentation Specialist" },
    {id:6, name: "Usman Ahmed", title: "Port Operations" },
    {id:7, name: "Sana Zahra", title: "Import/Export Manager" },
    {id:8, name: "Bilal Hassan", title: "Fleet Manager" },
];

// Freight transportation services data
const freightServices = [
    {
        id: 1,
        title: "Customs Clearance",
        description: "Fast and efficient clearance for imports and exports, ensuring compliance with all regulations and minimizing delays at ports and borders",
        icon: "ph-bold ph-file-text",
        image: "assets/images/services/services1.jpg"
    },
    {
        id: 2,
        title: "Freight Consultancy",
        description: "Expert advice on the most cost-effective and time-efficient transport modes, routes, and strategies for your shipments",
        icon: "ph-bold ph-lightbulb",
        image: "assets/images/services/services2.jpg"
    },
    {
        id: 3,
        title: "Documentation Assistance",
        description: "Complete support for all shipping and trade documents, including bills of lading, commercial invoices, packing lists, and customs forms",
        icon: "ph-bold ph-files",
        image: "assets/images/services/services3.jpg"
    },
    {
        id: 4,
        title: "In-Country Transport",
        description: "Secure and timely domestic transportation from ports to warehouses, factories, or final delivery points",
        icon: "ph-bold ph-truck",
        image: "assets/images/services/services4.jpg"
    }
];

// Testimonials for freight transportation
const testimonials = [
    {
        id: 1,
        name: "Abdul Rahman",
        position: "Import Manager",
        company: "Textile Industries Ltd",
        rating: 5,
        text: "Jabbi International has been our trusted partner for over 5 years. Their expertise in customs clearance and timely delivery has helped us maintain our supply chain efficiently."
    },
    {
        id: 2,
        name: "Sarah Ahmed",
        position: "Export Coordinator",
        company: "Electronics Corp",
        rating: 5,
        text: "Excellent service! They handle our electronics exports with utmost care and provide real-time tracking. Highly recommended for anyone looking for reliable freight services."
    },
    {
        id: 3,
        name: "Muhammad Hassan",
        position: "Logistics Director",
        company: "Automotive Parts Ltd",
        rating: 5,
        text: "Professional team with deep knowledge of international shipping regulations. They've consistently delivered our automotive parts on time without any damage."
    }
];

const server_ip = 'http://localhost:800'

export { ContactInfo, teamMembers, server_ip, SocialMediaLinks, WhatsAppButton, freightServices, testimonials }