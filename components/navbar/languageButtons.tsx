'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { Button, Divider } from '@nextui-org/react';
import { cn } from '@/lib/utils';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = ( newLocale: string ) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (

    <div className="flex items-center gap-1">
          <button onClick={() => handleChange('de')} className={cn("size-[28px] bg-transparent rounded-[10px] hover:text-white hover:bg-cmr-red-400 transition-all ease-out duration-200 border-cmr-red-400 border-2 text-sm", currentLocale === 'de' ? "text-white bg-cmr-red-400" : "text-cmr-red-400")}>DE</button>
          <Divider orientation="vertical" className="bg-cmr-red-400 w-[2px] h-[22px] "/>
          <button onClick={() => handleChange('en')} className={cn("size-[28px] bg-transparent rounded-[10px] hover:text-white hover:bg-cmr-red-400 transition-all ease-out duration-200 border-cmr-red-400 border-2 text-sm", currentLocale === 'en' ? "text-white bg-cmr-red-400" : "text-cmr-red-400")}>EN</button>
    </div>

  );
}