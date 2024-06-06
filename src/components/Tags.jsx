import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { RiSupabaseFill } from 'react-icons/ri';

const tagData = {
  Javascript: { icon: IoLogoJavascript, name: 'Javascript' },
  React: { icon: FaReact, name: 'React' },
  TailwindCSS: { icon: RiTailwindCssFill, name: 'TailwindCSS' },
  FramerMotion: { icon: TbBrandFramerMotion, name: 'FramerMotion' },
  Supabase: { icon: RiSupabaseFill, name: 'Supabase' },
};

export const Tags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {tags.map(tag => {
        const TagIcon = tagData[tag]?.icon;
        const tagName = tagData[tag]?.name;
        return TagIcon && tagName ? (
          <div key={tag} className="flex items-center gap-1">
            <TagIcon className="text-custom_brown sm:text-2xl" />
            <p className="text-custom_brown sm:text-xl font-light font-mono">
              {tagName}
            </p>
          </div>
        ) : null;
      })}
    </div>
  );
};
