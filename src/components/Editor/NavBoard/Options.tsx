import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import useCanvas from '@/hooks/useCanvas';
import useEditor from '@/hooks/useEditor';
import useTheme from '@/hooks/useTheme';
import { Background, Theme, Color } from '@/types';
import {
  Cog,
  Contrast,
  Download,
  HelpCircle,
  Ratio,
  Users
} from 'lucide-react';

const Options = () => {
  return (
    <div className='flex flex-col pb-4'>
      <Import />
      <HelpFeedback />
      <Settings />
    </div>
  );
};

export default Options;

const Settings = () => {
  const { showSettings, setShowSettings, settings, setSettings } =
    useEditor();

  const AppearenceSection = () => {
    const { background, setBackground } = useCanvas(),
      { theme, setTheme, color, setColor } = useTheme(),
      handleTheme = (e: Theme) => {
        setTheme(e);
      },
      handleBackground = (e: Background) => {
        setBackground(e);
      },
      handleColor = (e: Color) => {
        setColor(e);
      };

    return (
      <>
        <h2 className='text-lg font-semibold'>Appearence</h2>
        <div className='flex flex-col gap-3'>
          <h3 className='text-sm'>Color Sheme</h3>
          <RadioGroup
            className='flex gap-8 pl-3'
            defaultValue={theme}
            onValueChange={handleTheme}
          >
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='light' id='light' />
              <Label htmlFor='light'>Light</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='dark' id='dark' />
              <Label htmlFor='dark'>Dark</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='system' id='system' />
              <Label htmlFor='system'>System</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator />
        <div className='flex flex-col gap-3'>
          <h3 className='text-sm'>Theme</h3>
          <RadioGroup
            className='grid grid-cols-3 gap-8 pl-3'
            defaultValue={color}
            onValueChange={handleColor}
          >
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='zinc' id='zinc' />
              <Label htmlFor='zinc'>
                <Badge className='bg-[#52525b] text-md hover:bg-[#52525b] text-white'>
                  Zinc
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='slate' id='slate' />
              <Label htmlFor='slate'>
                <Badge className='bg-[#475569] text-md hover:bg-[#475569] text-white'>
                  Slate
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='stone' id='stone' />
              <Label htmlFor='stone'>
                <Badge className='bg-[#57534e] text-md hover:bg-[#57534e] text-white'>
                  Stone
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='gray' id='gray' />
              <Label htmlFor='gray'>
                <Badge className='bg-[#4b5563] text-md hover:bg-[#4b5563] text-white'>
                  Gray
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='neutral' id='neutral' />
              <Label htmlFor='neutral'>
                <Badge className='bg-[#525252] text-md hover:bg-[#525252] text-white'>
                  Neutral
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='red' id='red' />
              <Label htmlFor='red'>
                <Badge className='bg-[#dc2626] text-md hover:bg-[#dc2626] text-white'>
                  Red
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='rose' id='rose' />
              <Label htmlFor='rose'>
                <Badge className='bg-[#e11d48] text-md hover:bg-[#e11d48] text-white'>
                  Rose
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='orange' id='orange' />
              <Label htmlFor='orange'>
                <Badge className='bg-[#ea580c] text-md hover:bg-[#ea580c] text-white'>
                  Orange
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='green' id='green' />
              <Label htmlFor='green'>
                <Badge className='bg-[#22c55e] text-md hover:bg-[#22c55e] text-white'>
                  Green
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='blue' id='blue' />
              <Label htmlFor='blue'>
                <Badge className='bg-[#3b82f6] text-md hover:bg-[#3b82f6] text-white'>
                  Blue
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='yellow' id='yellow' />
              <Label htmlFor='yellow'>
                <Badge className='bg-[#facc15] text-md hover:bg-[#facc15] text-white'>
                  Yellow
                </Badge>
              </Label>
            </div>
            <div className='flex items-center space-x-2 w-20'>
              <RadioGroupItem value='violet' id='violet' />
              <Label htmlFor='violet'>
                <Badge className='bg-[#6d28d9] text-md hover:bg-[#6d28d9] text-white'>
                  Violet
                </Badge>
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Separator />
        <div className='flex flex-col gap-3'>
          <h3 className='text-sm'>Background</h3>
          <RadioGroup
            className='flex gap-8 pl-3'
            defaultValue={background}
            onValueChange={handleBackground}
          >
            <div className='flex flex-col items-center space-y-2'>
              <div className='border h-20 w-20 rounded-lg bg-light dark:bg-dark bg-dots bg-preview'></div>
              <div className='flex space-x-2'>
                <RadioGroupItem value='dots' id='dots' />
                <Label htmlFor='dots'>Dots</Label>
              </div>
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <div className='border h-20 w-20 rounded-lg bg-light dark:bg-dark bg-grid bg-preview'></div>
              <div className='flex space-x-2'>
                <RadioGroupItem value='grid' id='grid' />
                <Label htmlFor='grid'>Grid</Label>
              </div>
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <div className='border h-20 w-20 rounded-lg bg-light dark:bg-dark bg-cross bg-preview'></div>
              <div className='flex space-x-2'>
                <RadioGroupItem value='cross' id='cross' />
                <Label htmlFor='cross'>Cross</Label>
              </div>
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <div className='border h-20 w-20 rounded-lg bg-light dark:bg-dark bg-dash bg-preview'></div>
              <div className='flex space-x-2'>
                <RadioGroupItem value='dash' id='dash' />
                <Label htmlFor='dash'>Dash</Label>
              </div>
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <div className='border h-20 w-20 rounded-lg bg-light dark:bg-dark'></div>
              <div className='flex space-x-2'>
                <RadioGroupItem value='none' id='none' />
                <Label htmlFor='none'>None</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </>
    );
  };

  return (
    <Dialog
      open={showSettings}
      onOpenChange={(open: boolean) => setShowSettings(open)}
    >
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-none w-full flex gap-3 justify-start px-4'
        >
          <Cog className='h-[1.2rem] w-[1.2rem]' />
          <span className='font-normal'>Settings</span>
          <DropdownMenuShortcut>⌘+/</DropdownMenuShortcut>
        </Button>
      </DialogTrigger>
      <DialogContent className='p-0 gap-0 min-w-[512px] min-h-[400px] max-w-max'>
        <DialogHeader className='border-b p-4 mb-0'>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Configure your settings</DialogDescription>
        </DialogHeader>
        <div className='flex'>
          <aside className='w-fit h-full flex flex-col border-r'>
            <Button
              variant='ghost'
              onClick={() => setSettings('appearance')}
              className={`rounded-none w-full flex gap-3 justify-start pl-4 ${
                settings === 'appearance' && 'bg-accent text-primary'
              }`}
            >
              <Contrast className='h-[1.2rem] w-[1.2rem]' />
              <span className='font-normal'>Appearance</span>
            </Button>
            <Button
              variant='ghost'
              onClick={() => setSettings('board')}
              className={`rounded-none w-full flex gap-3 justify-start pl-4 ${
                settings === 'board' && 'bg-accent text-primary'
              }`}
            >
              <Ratio className='h-[1.2rem] w-[1.2rem]' />
              <span className='font-normal'>Board</span>
            </Button>
            <Button
              variant='ghost'
              onClick={() => setSettings('collaboration')}
              className={`rounded-none w-full flex gap-3 justify-start pl-4 ${
                settings === 'collaboration' && 'bg-accent text-primary'
              }`}
            >
              <Users className='h-[1.2rem] w-[1.2rem]' />
              <span className='font-normal'>Collaboration</span>
            </Button>
          </aside>
          <div className='flex flex-col gap-5 p-4 w-full h-full'>
            {settings === 'appearance' && <AppearenceSection />}
            {settings === 'board' && <h1>Board</h1>}
            {settings === 'collaboration' && <h1>Collaboration</h1>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Import = () => {
  return (
    <Button
      variant='ghost'
      size='icon'
      className='rounded-none w-full flex gap-3 justify-start px-4'
    >
      <Download className='h-[1.2rem] w-[1.2rem]' />
      <span className='font-normal'>Import</span>
      <DropdownMenuShortcut>⌘+I</DropdownMenuShortcut>
    </Button>
  );
};

const HelpFeedback = () => {
  const { showHelpFeedback, setShowHelpFeedback } = useEditor();
  return (
    <Dialog open={showHelpFeedback} onOpenChange={setShowHelpFeedback}>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-none w-full flex gap-3 justify-start px-4'
        >
          <HelpCircle className='h-[1.2rem] w-[1.2rem]' />
          <span className='font-normal'>Help & Feedback</span>
          <DropdownMenuShortcut>⌘+?</DropdownMenuShortcut>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Help & Feedback</DialogTitle>
          <DialogDescription>Get help and send feedback</DialogDescription>
        </DialogHeader>
        <Separator />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col'>
              <h3 className='text-lg font-medium'>Visit our Help Center</h3>
              <p className='text-sm text-muted-foreground'>
                Get answers to frequently asked questions.
              </p>
            </div>
            <Button variant='secondary' className='gap-2'>
              <span>Visit Help Center</span>
            </Button>
          </div>
          <div className='flex items-center'>
            <Separator className='w-1/3' />
            <span className='mx-auto'>OR</span>
            <Separator className='w-1/3' />
          </div>
          <form className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <h3 className='text-lg font-medium'>Send us feedback</h3>
              <p className='text-sm text-muted-foreground'>
                We value your feedback. Let us know what you think.
              </p>
            </div>
            <div className='flex flex-col gap-3'>
              <Label htmlFor='email'>Email</Label>
              <Input
                placeholder='Your Email...'
                type='email'
                id='email'
                className='col-span-3'
              />
            </div>
            <div className='grid w-full gap-3'>
              <Label htmlFor='subject'>Subject</Label>
              <Input
                placeholder='Feedback subject...'
                id='subject'
                className='col-span-3'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                placeholder='Type your feedback here...'
                id='message'
                className='col-span-3'
              />
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button type='submit'>Send Feedback</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
