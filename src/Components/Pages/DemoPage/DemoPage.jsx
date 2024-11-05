import React from 'react';

const DemoPage = () => {
    return (
        <div className='container pt-5 px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto'>
            <h2 className='text-center text-xl md:text-2xl lg:text-3xl font-bold text-black mt-8 mb-7'>Frequency Asked Questions (FAQS)</h2>
            <div className="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-[14px] sm:text-base sm:text-[18px] md:text-xl font-medium">What is Gadget Heaven??</div>
                <div className="collapse-content">
                    <p className='text-xs sm:text-base'>"Gadget Heaven" appears to be a fictional or thematic name typically associated with a store, website, or brand that specializes in electronic gadgets, tech accessories, or innovative devices. </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[14px] sm:text-base sm:text-[18px] md:text-xl font-medium">What types of products can be found at Gadget Heaven?</div>
                <div className="collapse-content">
                    <p className='text-xs sm:text-base'>Gadget Heaven offers a wide range of products, including the latest electronic gadgets, tech accessories, smart devices, gaming peripherals, and innovative technology solutions designed to enhance user experiences.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[14px] sm:text-base sm:text-[18px] md:text-xl font-medium">What are some popular brands featured at Gadget Heaven?</div>
                <div className="collapse-content">
                    <p className='text-xs sm:text-base'>Gadget Heaven typically features popular brands in the technology sector, such as Apple, Samsung, Sony, Logitech, and others, depending on the specific offerings of the store.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[14px] sm:text-base sm:text-[18px] md:text-xl font-medium">Does Gadget Heaven offer customer support or warranty services?</div>
                <div className="collapse-content">
                    <p className='text-xs sm:text-base'>Yes, Gadget Heaven usually provides customer support for inquiries and issues related to products. Additionally, they may offer warranty services on certain items, ensuring customer satisfaction and protection for their purchases.</p>
                </div>
            </div>
        </div>
    );
};

export default DemoPage;