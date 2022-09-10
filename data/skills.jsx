import React from 'react'
import HTMLIcon from '../components/Icons/HTMLIcon'
import JavaScriptIcon from '../components/Icons/JavaScriptIcon'
import JQueryIcon from '../components/Icons/JQueryIcon'
import LiquidIcon from '../components/Icons/LiquidIcon'
import PHPIcon from '../components/Icons/PHPIcon'
import ReactIcon from '../components/Icons/ReactIcon'
import ShopifyIcon from '../components/Icons/ShopifyIcon'
export const Skills = {
	languages: [
		{
			name: 'PHP',
			level: 97,
			icon: <PHPIcon />,
		},
		{
			name: 'JavaScript',
			level: 95,
			icon: <JavaScriptIcon />,
		},
		{
			name: 'SQL',
			level: 74,
			icon: '',
		},
		{
			name: 'CSS',
			level: 98,
			icon: '',
		},
		{
			name: 'HTML',
			level: 99,
			icon: <HTMLIcon />,
		},
		{
			name: 'Liquid',
			level: 88,
			icon: <LiquidIcon />,
		},
		{
			name: 'NoSQL',
			level: 75,
			icon: '',
		},
	],
	libraries: [
		{
			name: 'React',
			level: 80,
			icon: <ReactIcon />,
		},
		{
			name: 'jQuery',
			level: 90,
			icon: <JQueryIcon />,
		},
		{
			name: 'NextJS',
			level: 65,
			icon: '',
		},
		{
			name: 'ExpressJS',
			level: 60,
			icon: '',
		},
	],
	softwares: [
		{
			name: 'WordPress',
			level: 98,
			icon: '',
		},
		{
			name: 'MySQL',
			level: 92,
			icon: '',
		},
		{
			name: 'Node',
			level: 88,
			icon: '',
		},
		{
			name: 'MongoDB',
			level: 70,
			icon: '',
		},
		{
			name: 'Shopify',
			level: 96,
			icon: <ShopifyIcon />,
		},
		{
			name: 'Laravel',
			level: 93,
			icon: '',
		},
	],
}
