import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Button from './Button';

const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="fullname" placeholder="Full name" />
        <Input type="email" placeholder="Email address" />
        <Input type="phone" placeholder="Phone number" />
        <div className="flex flex-col gap-6">
          <Textarea
            className="h-[180px] resize-none"
            placeholder="Enter your message"
          />
          <Button text="Send Message" />
        </div>
      </div>
    </form>
  );
};

export default Form;
