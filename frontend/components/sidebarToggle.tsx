import { Menu, X } from 'lucide-react'; // Import icons from lucide-react

interface SidebarToggleButtonProps {
isOpen: boolean;
setIsOpen: (open: boolean) => void;
}

const SidebarToggleButton = ({ isOpen, setIsOpen }: SidebarToggleButtonProps) => {
return (
    <button
    onClick={() => setIsOpen(!isOpen)}
    className={`p-2 text-gray-300 border border-gray-500 bg-gray-800 absolute rounded-full shadow-md z-50 transition-all duration-300 ${isOpen ? 'left-[calc(17%)]' : 'left-2'}`}
    >
    {isOpen ? <X className="w-[100%] h-[100%]" /> : <Menu className="w-[100%] h-[100%]" />}
    </button>
);
};

export default SidebarToggleButton;
