
import initTranslations from '@/app/i18n';
import React from 'react';


interface dataProps {
    Thema ?: string,
    Zielgruppe?:string ,
    Methode?:string,
    Stichprobe? : string

}

const TableComponent = async ({data , locale} : {data: dataProps [] , locale: string}) => {

  const { t } = await initTranslations(locale, ['table']);

  return (
    <div className="flex justify-center overflow-x-scroll md:overflow-x-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#80808026]">
          <tr>
            <th
              className=" px-2.5 py-5 text-left text-base font-light w-[29%] min-w-[120px]"
            >
              {t("Thema")}
            </th>
            <th
              className="px-2.5 py-5 text-left text-base font-light w-[28%] min-w-[120px]"
            >
              {t("Zielgruppe")}
            </th>
            <th
              className="px-2.5 py-5 text-left text-base font-light w-[29%] min-w-[120px]"
            >
              {t("Methode")}
            </th>
            <th
              className="px-2.5 py-5 text-left text-base font-light w-[13%] min-w-[120px]"
            >
              {t("Stichprobe")}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, idx) => (
            <tr key={idx} className='even:bg-[#80808026] '>
              <td className="px-3 py-5 text-base font-light ">{item.Thema}</td>
              <td className="px-3 py-5 text-base font-light ">{item.Zielgruppe}</td>
              <td className="px-3 py-5 text-base font-light ">{item.Methode}</td>
              <td className="px-3 py-5  text-base font-light">{item.Stichprobe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
