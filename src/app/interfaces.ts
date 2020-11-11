export interface CreateUserBody {
    username: string, 
    first_name: string, 
    last_name: string, 
    password: string, 
    subscription_type: 'Premium' | 'Basic'
}

export interface LoginBody {
    username: string, 
    password: string,
}

export interface SubscriptionBody {
    user_id: string,
    subscription_type: 'Premium' | 'Basic'
}

export interface FollowBody {
    user_id: string,
    currency_pair_name: string
}