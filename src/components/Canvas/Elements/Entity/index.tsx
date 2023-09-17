import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Entity } from '@/types';
import OptionsButtons from './OptionsButtons';
import Element from '..';
import { KeySquare } from 'lucide-react';
import { RECT_H, RECT_W } from '@/utils/constants';

const EntityElement = ({ data }: { data: Entity }) => {
  return (
    <Element left={data.positions.x * RECT_W} top={data.positions.y * RECT_H} width={RECT_W} height={RECT_H}>
      <div
        className='relative group ring-offset-background transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-lg'
        id={data._id.toString()}
      >
        <OptionsButtons />
        <div className='bg-background border rounded-lg overflow-hidden flex flex-col'>
          <span
            className='text-2xl w-full p-2 text-center font-medium'
            style={{ backgroundColor: data.color }}
          >
            {data.name}
          </span>
          <Table>
            <TableHeader>
              <TableRow className='bg-accent'>
                <TableHead className='w-[100px] h-fit h-fit py-2'>
                  Fields
                </TableHead>

                <TableHead className='text-right h-fit py-2'>Types</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.fields &&
                data.fields.map(({ name, type, length, primaryKey }, key) => (
                  <TableRow
                    key={key}
                    className={primaryKey ? 'text-yellow-600' : ''}
                  >
                    <TableCell
                      className={
                        primaryKey ? 'underline font-semibold relative' : ''
                      }
                    >
                      {primaryKey && (
                        <KeySquare className='h-4 w-4 inline-block mr-1' />
                      )}
                      {name}
                    </TableCell>
                    <TableCell className='text-right'>
                      {length ? `${type}(${length})` : type}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Element>
  );
};

export default EntityElement;
