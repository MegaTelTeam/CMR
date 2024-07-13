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

    <div className="flex items-center">
          <Button isIconOnly radius="none" onPress={() => handleChange('de')} disableAnimation className={cn("lg:text-xs xl:text-sm bg-transparent h-fit py-1  hover:text-cmr-red-500 transition-all ease-out duration-200 ", currentLocale === 'de' ? "text-cmr-red-500" : "text-cmr-gray-700")}>DE</Button>
          <Divider orientation="vertical" className="bg-cmr-gray-700 w-[2px] h-[27px] "/>
          <Button isIconOnly radius="none" onPress={() => handleChange('en')} disableAnimation className={cn("lg:text-xs xl:text-sm bg-transparent h-fit py-1  hover:text-cmr-red-500 transition-all ease-out duration-200 ", currentLocale === 'en' ? "text-cmr-red-500" : "text-cmr-gray-700")}>EN</Button>
    </div>

  );
}