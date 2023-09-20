import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import useTheme from "@/hooks/useTheme";
import { ColorItemProps } from "@/types";
import { Check } from "lucide-react";

const ColorItem = ({_color, hex}: ColorItemProps) => {
    const { color, setColor } = useTheme();
    return (
      <DropdownMenuItem onClick={() => setColor(_color)}>
            <div className='h-5 w-5 rounded-full border mr-2'
            style={{backgroundColor: hex}}
            ></div>
        {_color.charAt(0).toUpperCase() + _color.slice(1)}{' '}
        {color === _color && <Check className='w-4 h-4 ml-auto text-primary' />}
      </DropdownMenuItem>
    );
};

export default ColorItem;