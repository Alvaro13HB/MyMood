import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export function Login() {
    const navigation = useNavigation();
    const [storedUser, setStoredUser] = useState<{ email: string; password: string } | null>(null);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [isLoginScreen, setIsLoginScreen] = useState(false);

    const validateEmail = (input: string) => {
        setEmail(input);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(regex.test(input));
    };

    const handleSignUp = () => {
        if(!email || !password){
            Alert.alert('Erro', 'Por favor preencha todos os campos');
            return;
        }

        if(!isValidEmail){
            Alert.alert('Erro', 'Insira um Email válido');
            return;
        }

        setStoredUser({ email, password });
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        setEmail('');
        setPassword('');
        setIsLoginScreen(true);
    };

    const handleLogin = () => {
        if (!email || !password){
            Alert.alert('Erro', 'Por favor preencha todos os campos');
            return;
        }

        if (storedUser && email === storedUser.email && password === storedUser.password){
            setEmail('');
            setPassword('');
            navigation.navigate('MoodSelection');
        } 
        else{
            Alert.alert('Erro', 'Email ou senha incorretos');
        }
    };

    const isSignup = !isLoginScreen;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{isSignup ? 'Criar Conta' : 'Entrar'}</Text>

            <TextInput
                style={[styles.input, !isValidEmail && styles.invalid]}
                placeholder="Email"
                value={email}
                onChangeText={(text) => validateEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#aaa"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#aaa"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={isSignup ? handleSignUp : handleLogin}
            >
                <Text style={styles.buttonText}>
                    {isSignup ? 'Cadastrar' : 'Entrar'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => setIsLoginScreen(!isLoginScreen)}>
            <Text style={styles.switchText}>
                {isSignup
                ? 'Já tem uma conta? Faça login'
                : 'Não tem conta? Cadastre-se'}
            </Text>
            </TouchableOpacity>
        </View>
    );
}