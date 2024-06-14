import TransformationForm from '@/components/shared/TransformationForm'
import Header from '@/components/shared/header'
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'


const AddTransformationsPage = async ({params: { type }}:SearchParamProps) => {
        const transformations =transformationTypes[type]
        const {userId} =auth();
        if (!userId) redirect('/sing-in')

        const user = await getUserById(userId);
    return (

        <>
        <Header 
        title={transformations.title}
        subtitle={transformations.subTitle}
        />

        <TransformationForm 
        action='Add'
        userId={user._id}
        type={transformations.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
        />
        </>
    )
}

export default AddTransformationsPage
