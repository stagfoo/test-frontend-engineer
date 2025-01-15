import { FaceFrownIcon } from '@heroicons/react/24/outline'
export function ErrorBlock({
    title,
    subtitle,
    byline,
    linkText,
    href
}: {
    title: string,
    subtitle: string
    byline: string,
    linkText: string,
    href: string
}) {
    return (
        <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-red-950 dark:border-red-700 text-center">
            <div className="flex flex-1 justify-center p-2">
                <FaceFrownIcon className="size-12" />
            </div>
            <h2 className="mb-2 text-4xl font-bold">{title}</h2>
            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{subtitle}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{byline}</p>
            <a href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                {linkText}
            </a>
        </div>
    )
}