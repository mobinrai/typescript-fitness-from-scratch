import type { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page:string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage)=>void
}

export const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-gray-500":'text-primary-300'} font-bold hover:text-gray-500 transition duration-500`}
    href={lowerCasePage}
    onClick={()=>setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}