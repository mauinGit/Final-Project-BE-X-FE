export default function Navbar() {
    return(
        <nav id="navbar" className="font-Open Sans sticky top-0 w-full z-50 bg-white/20 backdrop-blur-lg">
            <div className="flex flex-wrap items-center justify-between px-3 sm:px-8 lg:px-20 py-4 lg:py-6 gap-y-4 gap-x-6">
                <div className="flex flex-wrap gap-5 justify-center items-center">
                    <img 
                        src="/assets/logoGDC.png" 
                        alt="logo GDCourse" 
                        className=""
                    />
                    <h1 className="text-3xl font-bold text-heading">GDCourse</h1>
                </div>
            </div>
        </nav>
    );
};