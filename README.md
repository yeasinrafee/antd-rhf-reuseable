# React + TypeScript + Antd + react-hook-form

First we have to install the Ant Design and react-hook-form packages

npm install react-hook-form antd

We have layouts and components here:

1. Sidebar Layout
   This is a responsive sidebar, using antd and inline css.

For the showing option in the sidebar, we have items array, in the array we have to pass an object for every option. The object will carry a unique key and label. label will show the option in the sidebar.

const items: MenuProps['items'] = [
{
key: 1,
label: 'Dashboard'
},
{
key: 2,
label: 'Profile'
}
]

We can also use the nested option for our need. On that time the item will be: (there will be a children property in nested option)
const items: MenuProps['items'] = [
{
key: 1,
label: 'Dashboard'
},
{
key: 2,
label: 'Profile'
children: [
{
key: '11'
label: 'Student'
},
{
key: '21',
label: 'Teacher'
}
]
}
]
