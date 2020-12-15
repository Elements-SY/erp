/* Layout */
import mainLayout from '@/components/mainLayout'
// eslintRouter
export default [
   {
      path: '/eslint',
      name: 'eslint',
      component: mainLayout,
      redirect: '/eslint/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/eslint/index',
            name: 'eslint_index',
            component: () => import('@/views/eslint'),
            meta: {
               request: true,
               title: 'ESlint'
            }
         },
      ]
   },


]