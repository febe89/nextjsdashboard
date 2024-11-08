import React, { Dispatch, SetStateAction, useState } from 'react'
import { Command, CommandItem } from 'cmdk'
import { FiEye, FiLogOut, FiPlus } from 'react-icons/fi'

export const CommandMenu = ({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => {
  // Toggle the menu when ⌘K is pressed
  const [value, setValue] = useState('')
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog onClick={() => setOpen(false)} open={open} onOpenChange={setOpen} label='Global Command Menu' className='fixed  inset-0 bg-stone-950/50'>
      <div onClick={(e) => e.stopPropagation()} className='bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12'>
        <Command.Input value={value} onValueChange={setValue} className='relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none' placeholder='What do you need' />
        <Command.List className='p-3' >
          <Command.Empty>
            No results found.
            <span className='text-violet-500'>{value}</span>
          </Command.Empty>

          <Command.Group heading='team' className='text-sm mb-3 text-stone-300'>
            <Command.Item className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'>
              <FiPlus />
              Invite Member
            </Command.Item>
            <Command.Item className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'>
              <FiEye />
              See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group heading='integrations' className='text-sm mb-3 text-stone-300'>
            <Command.Item className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'>
              <FiPlus />
              Invite Member
            </Command.Item>
            
            <Command.Item className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'>
              <FiEye />
              See Org Chart
            </Command.Item>

          </Command.Group>
          <Command.Item className='flex cursor-pointer transition-colors p-2 text-sm text-stone-50 bg-stone-950 rounded items-center gap-2'>
              <FiLogOut/>
              Sign Out
            </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  )
}
