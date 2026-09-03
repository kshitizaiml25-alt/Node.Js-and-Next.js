export default async function UserProfilePage ({params}: any) {
    const {id} = await params;
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1 className="text-4xl">Profile Page </h1>
            <hr/>
            <span className="p-2 border border-gray-300 rounded-md">ID: {id}</span>
        </div>
    )
}