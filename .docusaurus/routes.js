
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/dsv/',
  component: ComponentCreator('/dsv/','e8d'),
  exact: true,
},
{
  path: '/dsv/blog',
  component: ComponentCreator('/dsv/blog','339'),
  exact: true,
},
{
  path: '/dsv/blog/hello-world',
  component: ComponentCreator('/dsv/blog/hello-world','047'),
  exact: true,
},
{
  path: '/dsv/blog/hola',
  component: ComponentCreator('/dsv/blog/hola','d24'),
  exact: true,
},
{
  path: '/dsv/blog/tags',
  component: ComponentCreator('/dsv/blog/tags','a04'),
  exact: true,
},
{
  path: '/dsv/blog/tags/docusaurus',
  component: ComponentCreator('/dsv/blog/tags/docusaurus','f90'),
  exact: true,
},
{
  path: '/dsv/blog/tags/facebook',
  component: ComponentCreator('/dsv/blog/tags/facebook','bd8'),
  exact: true,
},
{
  path: '/dsv/blog/tags/hello',
  component: ComponentCreator('/dsv/blog/tags/hello','04b'),
  exact: true,
},
{
  path: '/dsv/blog/tags/hola',
  component: ComponentCreator('/dsv/blog/tags/hola','6d6'),
  exact: true,
},
{
  path: '/dsv/blog/welcome',
  component: ComponentCreator('/dsv/blog/welcome','611'),
  exact: true,
},
{
  path: '/dsv/docs',
  component: ComponentCreator('/dsv/docs','37d'),
  
  routes: [
{
  path: '/dsv/docs/',
  component: ComponentCreator('/dsv/docs/','bf7'),
  exact: true,
},
{
  path: '/dsv/docs/doc2',
  component: ComponentCreator('/dsv/docs/doc2','59f'),
  exact: true,
},
{
  path: '/dsv/docs/doc3',
  component: ComponentCreator('/dsv/docs/doc3','dac'),
  exact: true,
},
{
  path: '/dsv/docs/mdx',
  component: ComponentCreator('/dsv/docs/mdx','612'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
