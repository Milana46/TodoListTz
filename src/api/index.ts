export const fetchURL = async (
  userName: string,
  setUserData: React.Dispatch<React.SetStateAction<{ login: string; avatar_url: string } | null>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (!response.ok) {
      throw new Error('User is not found!');
    }
    const data = await response.json();
    const user = { login: data.login, avatar_url: data.avatar_url };

    localStorage.setItem('userData', JSON.stringify(user));
    setUserData(user);
  } catch {
    setError('User is not found!');
  }
};
