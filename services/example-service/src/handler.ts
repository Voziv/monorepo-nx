import somePackage from 'some-package';


export default function handler() {
    const result = somePackage();
    return `Hello world! - Example Service - ${result}`;
}