import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import useCanvas from "@/hooks/useCanvas";
import { BackgroundItemProps } from "@/types";
import { Check } from "lucide-react";

const BackgroundItem = ({ _background }: BackgroundItemProps) => {
    const { background, setBackground } = useCanvas();
    return (
      <DropdownMenuItem onClick={() => setBackground(_background)}>
        {_background.charAt(0).toUpperCase() + _background.slice(1)}{' '}
        {background === _background && (
          <Check className='w-4 h-4 ml-auto text-primary' />
        )}
      </DropdownMenuItem>
    );
};

export default BackgroundItem;