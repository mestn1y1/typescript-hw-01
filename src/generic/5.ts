enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

function getRoleDescription(role: UserRole) {
  console.log(`Role: ${role}, Description: ${RoleDescription[role]}`);
}

getRoleDescription(UserRole.admin);
getRoleDescription(UserRole.guest);
getRoleDescription(UserRole.editor);
