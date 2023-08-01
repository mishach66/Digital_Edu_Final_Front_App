export const isUserAdmin = (user) => {
  if (!user) return;

  return user?.role?.includes("admin");
};

export const getUserInitials = (user) => {
  if (!user) return "-";

  return `${user.firstName.charAt(0).toUpperCase()}${user.lastName
    .charAt(0)
    .toUpperCase()}`;
};
