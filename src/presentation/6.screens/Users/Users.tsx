// src/components/UsersComponent.tsx

import React, { useEffect, useState } from 'react';
import { User } from '../../../domain/1.entities/example';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/exampleRepository';

const UsersComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const userRepository = new UserRepositoryImpl();

    const fetchUsers = async () => {
      try {
        const usuarios = await userRepository.getUsers();
        setUsers(usuarios);
      } catch (err) {
        console.error(err);
        setError('Error al obtener usuarios');
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Usuarios Protegidos</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;
