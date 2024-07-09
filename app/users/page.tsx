import React from 'react';

const UsersPage = () => {
    // Static data
    const users = [
        { id: 1, name: 'Aidanas Tamsauskas', email: 'aidanas.tamasauskas@gmail.com', position: 'Lead Developer at Nutshell Apps' },
        { id: 2, name: 'Madina Goigova', email: 'm.goigova@outlook.com', position: 'Manager for BSD board at Nutshell Apps' },
        { id: 3, name: 'Alex Nichol', email: 'alex@alexnichol.com', position: 'Lead Manager & Designer at Nutshell Apps' },
        { id: 4, name: 'Paul Cook', email: 'ptscr@gmx.com', position: 'Owner of Piradzo Limited' },
    ];

    return (<div className="w-full max-w-full dark:bg-stone-200 bg-zinc-900 dark:text-black text-white animate-fadeIn mx-auto flex justify-center min-h-screen px-4">
        <div className="overflow-x-auto w-full">
            <table className="w-full min-w-full pt-15 dark:text-black text-white table table-bordered animate-fadeIn">
                <thead>
                    <tr>
                        <th className="text-xl text-white dark:text-black">Name</th>
                        <th className="text-xl text-white dark:text-black">Email</th>
                        <th className="text-xl text-white dark:text-black">Position</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">
                                <a href={`mailto:${user.email}`} className="dark:text-indigo-700 text-blue-600">
                                    {user.email}
                                </a>
                            </td>
                            <td className="p-2">{user.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
    );
}

export default UsersPage;
