import Actuelle_section from "@/components/Actuelle_section";
import Costum_Button from "@/components/Costum_Button";
import Title from "@/components/Title";
import React from "react";
import initTranslations  from "../../../i18n";

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t } = await initTranslations(locale, ['archiv']);

  return (
    <div className="px-[12vw]">
      <Title title={t('C.M.R. News Archiv')} />
      <div className="flex flex-col gap-[50px] mt-12">
        <div className="flex flex-col gap-10">
          <Actuelle_section>
            <p className="font-medium text-2xl">{t('Vor der Oberbürgermeister-Wahl in Ulm')}</p>
            <p>{t('Oktober 2007')}</p>
            <p>
              {t(
                'Bei der Oberbürgermeisterwahl in Ulm am 2. Dezember zeichnet sich eine geringe Wahlbeteiligung ab. Nur 40 - 45% der Wahlberechtigten wollen derzeit an der Abstimmung über den neuen Rathauschef teilnehmen.'
              )}
              <br />
              {t(
                'Dies ist das Ergebnis einer repräsentativen Umfrage, die C.M.R. im Auftrag von Radio7 durchgeführt hat.'
              )}
            </p>
            <p>
              {t(
                'Favorit unter den Kandidaten ist Ivo Gönner (SPD), der jetzige Oberbürgermeister, der für eine dritte Amtszeit kandidiert.'
              )}
            </p>
            <p>
              {t(
                'Von den Wählerinnen und Wählern, die sich schon für einen Kandidaten entschieden haben, würden 86% Ivo Gönner ihre Stimme geben.'
              )}
            </p>
          </Actuelle_section>
          <Actuelle_section>
            <p className="font-medium text-2xl">{t('Vor der Oberbürgermeisterwahl in Kaiserslautern')}</p>
            <p>{t('Februar 2007')}</p>
            <p>
              {t(
                'Es wird spannend, wer nach der OB-Wahl am 11. März diesen Jahres Platz im Rathaus nimmt. Dem seit 1999 amtierenden OB Bernhard Deubig (CDU) steht mit Klaus Weichel (SPD) ein starker Herausforderer gegenüber. Wie mehrere Umfragen seit Juli 2006 von C.M.R. im Auftrag der RHEINPFALZ zeigen, liegt Klaus Weichel in der Wählergunst vor dem jetzigen OB.'
              )}
            </p>
            <p>{t('Weitere Informationen finden Sie hier:')}</p>
            <Costum_Button
              inside={true}
              link="#"
              text={t('Vor der Oberbürgermeisterwahl in Kaiserslautern.pdf')}
              height={50}
              width={650}
              text_className="font-medium text-xl"
            />
          </Actuelle_section>
          <Actuelle_section>
            <p className="font-medium text-2xl">{t('Länderfusion im Südwesten der Republik')}</p>
            <p>{t('Dezember 2006')}</p>
            <p>
              {t(
                'Eine Fusion von Rheinland-Pfalz und dem Saarland ist aus Sicht der Bürger eher nicht gewünscht, so das Ergebnis einer Umfrage, die C.M.R. im Auftrag der RHEINPFALZ in Rheinland-Pfalz und dem Saarland durchgeführt hat. Nur 40% der Rheinland-Pfälzer sowie 31% der Saarländer sprechen sich für eine Länderfusion aus.Weitere Informationen finden Sie hier: '
              )}
            </p>
            <Costum_Button
              inside={true}
              link="#"
              text={t('Länderfusion im Südwesten der Republik')}
              height={50}
              width={600}
              text_className="font-medium text-xl"
            />
          </Actuelle_section>
          <Actuelle_section>
            <p>
              {t(
                '(To view files in Adobe PDF format, you need the free Adobe Reader software.)'
              )}
            </p>
          </Actuelle_section>
        </div>
      </div>
    </div>
  );
};

export default page;
