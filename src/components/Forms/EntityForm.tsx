// import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger
// } from '@/components/ui/dialog';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger
// } from '@/components/ui/dropdown-menu';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from '@/components/ui/select';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow
// } from '@/components/ui/table';
// import { EntityFormProps, Field, Type } from '@/types';
// import { types } from '@/utils/constants';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {
//   Check,
//   Infinity,
//   KeySquare,
//   MoreHorizontal,
//   Pencil,
//   Plus,
//   Trash2
// } from 'lucide-react';
// import { FormEventHandler, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';

// const FieldFormSchema = z.object({
//   name: z
//     .string()
//     .nonempty()
//     .min(3, {
//       message: 'Username must be at least 2 characters.'
//     })
//     .max(50, {
//       message: 'Username must be at most 50 characters.'
//     })
//     .regex(/^[a-zA-Z0-9_]+$/, {
//       message: 'Name must only contain alphanumeric characters and underscores.'
//     }),
//   type: z.enum(),
//   length: z.number().optional(),
//   unsigned: z.boolean().optional(),
//   primaryKey: z.boolean().optional(),
//   nullable: z.boolean().optional(),
//   unique: z.boolean().optional(),
//   autoIncrement: z.boolean().optional()
// });

// const EntityFormSchema = z.object({
//   name: z
//     .string()
//     .nonempty()
//     .min(3, {
//       message: 'Username must be at least 2 characters.'
//     })
//     .max(50, {
//       message: 'Username must be at most 50 characters.'
//     })
//     .regex(/^[a-zA-Z0-9_]+$/, {
//       message: 'Name must only contain alphanumeric characters and underscores.'
//     }),
//   fields: z.array(FieldFormSchema)
// });

// const EntityForm = ({ show, setShow, position }: EntityFormProps) => {
//   const [fields, setFields] = useState<Field[]>([]);
//   const [editField, setEditField] = useState<{
//     field: Field | undefined;
//     index: number;
//   }>({ field: undefined, index: -1 });

//   const close = () => {
//     setShow(false);
//     setFields([]);
//   };

//   const AddFieldForm = () => {
//     const [primaryKey, setPrimaryKey] = useState<boolean>(false),
//       [noLength, setNoLength] = useState<boolean>(false),
//       [type, setType] = useState<Type>('INT'),
//       [autoIncrement, setAutoIncrement] = useState<boolean>(false),
//       [nullable, setNullable] = useState<boolean>(false),
//       [unique, setUnique] = useState<boolean>(false),
//       [unsigned, setUnsigned] = useState<boolean>(false);
//     const formAddField = useForm<z.infer<typeof FieldFormSchema>>({
//       resolver: zodResolver(FieldFormSchema),
//       defaultValues: {
//         name: '',
//         type: 'INT',
//         length: 50,
//         unsigned: false,
//         primaryKey: false,
//         nullable: false,
//         unique: false,
//         autoIncrement: false
//       }
//     });
//     const handleAddField = () => {
//         e.preventDefault();
//         const field: Field = {
//           name: formAddField.getValues('name'),
//           type: formAddField.getValues('type'),
//           length: noLength ? undefined : formAddField.getValues('length'),
//           unsigned: formAddField.getValues('unsigned'),
//           primaryKey: formAddField.getValues('primaryKey'),
//           nullable: formAddField.getValues('nullable'),
//           unique: formAddField.getValues('unique'),
//           autoIncrement: formAddField.getValues('autoIncrement')
//         }
//         setFields([...fields, field]);
//         console.log(fields);
//       };

//     return (
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button variant='secondary' className='w-full gap-1'>
//             <Plus className='h-4 w-4' />
//             Add Field
//           </Button>
//         </DialogTrigger>
//         <DialogContent className='sm:max-w-[525px] z-50'>
//           <DialogHeader>
//             <DialogTitle>Add Field</DialogTitle>
//             <DialogDescription>
//               Add a new field to the entity.
//             </DialogDescription>
//           </DialogHeader>
//           <Form {...formAddField}>
//           <form
//             className='flex flex-col gap-4'
//             onSubmit={(e) => handleAddField(e)}
//           >
//             <div className='flex flex-col gap-2'>
//               <Label htmlFor='fieldName'>Name</Label>
//               <Input id='fieldName' placeholder='Field name' required />
//             </div>
//             <div className='w-full h-[1px] border'></div>
//             <div className='flex gap-4'>
//               <div className='flex flex-col gap-2 w-full'>
//                 <Label htmlFor='fieldType'>Type</Label>
//                 <Select
//                   onValueChange={(value: Type) => setType(value)}
//                   defaultValue={type}
//                   required
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder='Choose a type' />
//                   </SelectTrigger>
//                   <ScrollArea>
//                     <SelectContent className='max-h-[256px]'>
//                       {types.map((type) => (
//                         <SelectItem key={type} value={type}>
//                           {type}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </ScrollArea>
//                 </Select>
//                 <div className='flex gap-2 w-full'>
//                   <Checkbox
//                     id='fieldUnsigned'
//                     onCheckedChange={(checked: boolean) =>
//                       setUnsigned(
//                         type === 'INT' ||
//                           type === 'BIGINT' ||
//                           type === 'TINYINT' ||
//                           type === 'SMALLINT' ||
//                           type === 'MEDIUMINT'
//                           ? checked
//                           : false
//                       )
//                     }
//                     checked={
//                       type === 'INT' ||
//                       type === 'BIGINT' ||
//                       type === 'TINYINT' ||
//                       type === 'SMALLINT' ||
//                       type === 'MEDIUMINT'
//                         ? unsigned
//                         : false
//                     }
//                     disabled={
//                       type === 'INT' ||
//                       type === 'BIGINT' ||
//                       type === 'TINYINT' ||
//                       type === 'SMALLINT' ||
//                       type === 'MEDIUMINT'
//                         ? false
//                         : true
//                     }
//                   />
//                   <Label htmlFor='fieldUnsigned'>Unsigned</Label>
//                 </div>
//               </div>
//               <div className='flex flex-col gap-2 w-full'>
//                 <Label htmlFor='fieldLength'>Length</Label>
//                 <Input
//                   id='fieldLength'
//                   placeholder='Field length'
//                   type='number'
//                   defaultValue={50}
//                   {...(noLength && { disabled: true })}
//                 />
//                 <div className='flex gap-2 w-full'>
//                   <Checkbox
//                     id='fieldNoLength'
//                     onCheckedChange={(checked: boolean) => setNoLength(checked)}
//                   />
//                   <Label htmlFor='fieldNoLength'>No Length</Label>
//                 </div>
//               </div>
//             </div>
//             <div className='w-full h-[1px] border'></div>
//             <Label>Properties</Label>
//             <div className='flex gap-4'>
//               <div className='flex gap-2 w-full'>
//                 <Checkbox
//                   id='fieldPrimaryKey'
//                   onCheckedChange={(checked: boolean) => setPrimaryKey(checked)}
//                 />
//                 <Label htmlFor='fieldPrimaryKey'>Primary Key</Label>
//               </div>
//               <div className='flex gap-2 w-full'>
//                 <Checkbox
//                   id='fieldNullable'
//                   {...(primaryKey && { checked: true })}
//                   onCheckedChange={(checked: boolean) => setNullable(checked)}
//                   disabled={primaryKey}
//                 />
//                 <Label htmlFor='fieldNullable'>Nullable</Label>
//               </div>
//               <div className='flex gap-2 w-full'>
//                 <Checkbox
//                   id='fieldUnique'
//                   {...(primaryKey && { checked: true })}
//                   onCheckedChange={(checked: boolean) => setUnique(checked)}
//                   disabled={primaryKey}
//                 />
//                 <Label htmlFor='fieldUnique'>Unique</Label>
//               </div>
//             </div>
//             <div className='flex gap-4'>
//               <div className='flex gap-2 w-full'>
//                 <Checkbox
//                   id='fieldAutoIncrement'
//                   onCheckedChange={(checked: boolean) =>
//                     setAutoIncrement(checked)
//                   }
//                 />
//                 <Label htmlFor='fieldAutoIncrement'>Auto Increment</Label>
//               </div>
//             </div>
//             <DialogFooter>
//               <Button type='submit'>Add</Button>
//             </DialogFooter>
//             </form>
//           </Form>
//         </DialogContent>
//       </Dialog>
//     );
//   };

//   const EditFieldForm = ({
//     field,
//     index
//   }: {
//     field: Field | undefined;
//     index: number;
//   }) => {
//     const [primaryKey, setPrimaryKey] = useState<boolean>(
//         field?.primaryKey || false
//       ),
//       [noLength, setNoLength] = useState<boolean>(field?.length === undefined),
//       [type, setType] = useState<Type>(field?.type || 'INT'),
//       [autoIncrement, setAutoIncrement] = useState<boolean>(
//         field?.autoIncrement || false
//       ),
//       [nullable, setNullable] = useState<boolean>(field?.nullable || false),
//       [unique, setUnique] = useState<boolean>(field?.unique || false),
//       [unsigned, setUnsigned] = useState<boolean>(field?.unsigned || false),
//       handleEditField: FormEventHandler<HTMLFormElement> = (e) => {
//         e.preventDefault();
//         const fieldEdited: Field = {
//           name: e.currentTarget.fieldName.value,
//           type: type,
//           length: noLength ? undefined : e.currentTarget.fieldLength.value,
//           unsigned: unsigned,
//           primaryKey: primaryKey,
//           nullable: primaryKey || nullable,
//           unique: primaryKey || unique,
//           autoIncrement: autoIncrement
//         };
//         setFields(
//           fields.map((field, key) => (key === index ? fieldEdited : field))
//         );
//       };
//     return (
//       <Dialog open={index < 0 ? false : true}>
//         <DialogContent className='sm:max-w-[525px] z-50'>
//           <DialogHeader>
//             <DialogTitle>Edit Field - {field?.name}</DialogTitle>
//             <DialogDescription>Edit the field of the entity.</DialogDescription>
//           </DialogHeader>
//           <form
//             className='flex flex-col gap-4'
//             onSubmit={(e) => handleEditField(e)}
//           >
//             <div className='flex flex-col gap-2'>
//               <Label htmlFor='fieldName'>Name</Label>
//               <Input
//                 id='fieldName'
//                 placeholder='Field name'
//                 defaultValue={field?.name}
//                 required
//               />
//             </div>
//             <div className='w-full h-[1px] border'></div>
//             <div className='flex gap-4'>
//               <div className='flex flex-col gap-2 w-full'>
//                 <Label htmlFor='fieldType'>Type</Label>
//                 <Select
//                   onValueChange={(value: Type) => setType(value)}
//                   defaultValue={field?.type}
//                   required
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder='Choose a type' />
//                   </SelectTrigger>
//                   <ScrollArea>
//                     <SelectContent className='max-h-[256px]'>
//                       {types.map((type) => (
//                         <SelectItem key={type} value={type}>
//                           {type}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </ScrollArea>
//                 </Select>
//                 <div className='flex gap-2 w-full'>
//                   <Checkbox
//                     id='fieldUnsigned'
//                     defaultChecked={unsigned}
//                     onCheckedChange={(checked: boolean) =>
//                       setUnsigned(
//                         type === 'INT' ||
//                           type === 'BIGINT' ||
//                           type === 'TINYINT' ||
//                           type === 'SMALLINT' ||
//                           type === 'MEDIUMINT'
//                           ? checked
//                           : false
//                       )
//                     }
//                     checked={
//                       type === 'INT' ||
//                       type === 'BIGINT' ||
//                       type === 'TINYINT' ||
//                       type === 'SMALLINT' ||
//                       type === 'MEDIUMINT'
//                         ? unsigned
//                         : false
//                     }
//                     disabled={
//                       type === 'INT' ||
//                       type === 'BIGINT' ||
//                       type === 'TINYINT' ||
//                       type === 'SMALLINT' ||
//                       type === 'MEDIUMINT'
//                         ? false
//                         : true
//                     }
//                   />
//                   <Label htmlFor='fieldUnsigned'>Unsigned</Label>
//                 </div>
//               </div>
//               <div className='flex flex-col gap-2 w-full'>
//                 <Label htmlFor='fieldLength'>Length</Label>
//                 <Input
//                   id='fieldLength'
//                   defaultValue={field?.length || 50}
//                   placeholder='Field length'
//                   type='number'
//                   {...(noLength && { disabled: true })}
//                 />
//                 <div className='flex gap-2 w-full'>
//                   <Checkbox
//                     id='fieldNoLength'
//                     defaultChecked={noLength}
//                     onCheckedChange={(checked: boolean) => setNoLength(checked)}
//                   />
//                   <Label htmlFor='fieldNoLength'>No Length</Label>
//                 </div>
//               </div>
//             </div>
//             <div className='w-full h-[1px] border'></div>
//             <Label>Properties</Label>
//             <div className='flex gap-4'>
//               <div className='flex gap-2 w-full'>
//                 <Checkbox
//                   id='fieldPrimaryKey'
//                   onCheckedChange={(checked: boolean) => setPrimaryKey(checked)}
//                 />
//                 <Label htmlFor='fieldPrimaryKey'>Primary Key</Label>
//               </div>
//               <div className='flex gap-2 w-full'>
//                 <Checkbox
//                   id='fieldNullable'
//                   defaultChecked={nullable}
//                   {...(primaryKey && { checked: true })}
//                   onCheckedChange={(checked: boolean) => setNullable(checked)}
//                   disabled={primaryKey}
//                 />
//                 <Label htmlFor='fieldNullable'>Nullable</Label>
//               </div>
//               <div className='flex gap-2 w-full'>
//                 <Checkbox
//                   id='fieldUnique'
//                   defaultChecked={unique}
//                   {...(primaryKey && { checked: true })}
//                   onCheckedChange={(checked: boolean) => setUnique(checked)}
//                   disabled={primaryKey}
//                 />
//                 <Label htmlFor='fieldUnique'>Unique</Label>
//               </div>
//             </div>
//             <div className='flex gap-4'>
//               <div className='flex gap-2 w-full'>
//                 <Checkbox
//                   id='fieldAutoIncrement'
//                   defaultChecked={autoIncrement}
//                   onCheckedChange={(checked: boolean) =>
//                     setAutoIncrement(checked)
//                   }
//                 />
//                 <Label htmlFor='fieldAutoIncrement'>Auto Increment</Label>
//               </div>
//             </div>
//             <DialogFooter>
//               <Button
//                 variant='secondary'
//                 onClick={() => setEditField({ field: undefined, index: -1 })}
//               >
//                 Cancel
//               </Button>
//               <Button type='submit'>Edit</Button>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     );
//   };

//   const handleDeleteField = (index: number) => {
//     setFields(fields.filter((field, key) => key !== index));
//   };

//   const formEntity = useForm<z.infer<typeof EntityFormSchema>>({
//     resolver: zodResolver(EntityFormSchema),
//     defaultValues: {
//       name: '',
//       fields: []
//     }
//   });

//   const onSubmitEntity = () => {
//     const entity = {
//       name: formEntity.getValues('name'),
//       fields: fields
//     };
//     console.log(entity);
//   };

//   return (
//     <Dialog open={show} onOpenChange={close}>
//       <DialogContent className='min-w-[425px] max-w-fit'>
//         <DialogHeader>
//           <DialogTitle>Add Entity</DialogTitle>
//           <DialogDescription>Add a new entity to the canvas.</DialogDescription>
//         </DialogHeader>
//         <Form {...formEntity}>
//           <form
//             onSubmit={formEntity.handleSubmit(onSubmitEntity)}
//             className='flex flex-col gap-4 w-full'
//           >
//             <FormField
//               control={formEntity.control}
//               name='name'
//               render={({ field, formState }) => (
//                 <FormItem>
//                   <FormLabel htmlFor='entityName'>Name</FormLabel>
//                   <FormControl>
//                     <Input
//                       id='entityName'
//                       placeholder='Entity name'
//                       required
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage>
//                     {formState.errors.name?.message || ' '}
//                   </FormMessage>
//                 </FormItem>
//               )}
//               className='flex flex-col gap-4'
//             />
//             <div className='w-full h-[1px] border'></div>
//             <div className='flex flex-col gap-4 w-full'>
//               <h3 className='text-md font-medium'>Fields</h3>
//               <div className='w-full flex flex-col gap-4'>
//                 {fields.length > 0 ? (
//                   <Table className=''>
//                     <TableHeader className='w-full'>
//                       <TableRow className='w-full'>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Type</TableHead>
//                         <TableHead>Length</TableHead>
//                         <TableHead>Unsigned</TableHead>
//                         <TableHead>Nullable</TableHead>
//                         <TableHead>Unique</TableHead>
//                         <TableHead>A.I</TableHead>
//                         <TableHead></TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {fields.map((field, key) => (
//                         <TableRow key={key}>
//                           <TableCell>
//                             {field.primaryKey ? (
//                               <KeySquare className='h-4 w-4 inline-block mr-2 text-primary' />
//                             ) : (
//                               ''
//                             )}
//                             {field.name}
//                           </TableCell>
//                           <TableCell>{field.type}</TableCell>
//                           <TableCell>
//                             {field.length === undefined ? (
//                               <Infinity className='h-4 w-4 mx-auto' />
//                             ) : (
//                               field.length
//                             )}
//                           </TableCell>
//                           <TableCell>
//                             {field.unsigned ? (
//                               <Check className='h-4 w-4 mx-auto' />
//                             ) : (
//                               ''
//                             )}
//                           </TableCell>
//                           <TableCell>
//                             {field.nullable ? (
//                               <Check className='h-4 w-4 mx-auto' />
//                             ) : (
//                               ''
//                             )}
//                           </TableCell>
//                           <TableCell>
//                             {field.unique ? (
//                               <Check className='h-4 w-4 mx-auto' />
//                             ) : (
//                               ''
//                             )}
//                           </TableCell>
//                           <TableCell>
//                             {field.autoIncrement ? (
//                               <Check className='h-4 w-4 mx-auto' />
//                             ) : (
//                               ''
//                             )}
//                           </TableCell>
//                           <TableCell className='text-right'>
//                             <DropdownMenu>
//                               <DropdownMenuTrigger asChild>
//                                 <Button variant='ghost' className='h-8 w-8 p-0'>
//                                   <span className='sr-only'>Open Actions</span>
//                                   <MoreHorizontal className='h-4 w-4' />
//                                 </Button>
//                               </DropdownMenuTrigger>
//                               <DropdownMenuContent align='end'>
//                                 <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                                 <DropdownMenuSeparator />
//                                 <DropdownMenuItem
//                                   onClick={() =>
//                                     setEditField({ field, index: key })
//                                   }
//                                 >
//                                   <Pencil className='w-4 h-4 mr-2' />
//                                   Edit
//                                 </DropdownMenuItem>
//                                 <DropdownMenuItem
//                                   className='text-destructive'
//                                   onClick={() => handleDeleteField(key)}
//                                 >
//                                   <Trash2 className='w-4 h-4 mr-2' />
//                                   Delete
//                                 </DropdownMenuItem>
//                               </DropdownMenuContent>
//                             </DropdownMenu>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 ) : (
//                   <p className='text-stone-300 dark:text-stone-600 text-sm mx-auto'>
//                     No fields added yet.
//                   </p>
//                 )}
//                 <AddFieldForm />
//                 <EditFieldForm
//                   field={editField.field}
//                   index={editField.index}
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <Button type='submit'>Add</Button>
//             </DialogFooter>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EntityForm;
