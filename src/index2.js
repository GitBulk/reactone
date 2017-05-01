function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'toan',
    lastName: 'tran'
};

const element = (
    <h1>Hello, {formatName(user)}</h1>
);