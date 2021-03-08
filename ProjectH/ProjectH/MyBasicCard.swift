//
//  MyBasicCard.swift
//  ProjectH
//
//  Created by 홍홍홍 on 2021/03/07.
//

import SwiftUI

struct MyBasicCard : View {
    
    var body : some View{
        HStack(spacing:20){
            Image(systemName: "flag.fill")
                .font(.system(size:40))
                .foregroundColor(Color.white)
            
        
            VStack(alignment:.leading,spacing:0){
                Divider().opacity(0)
                Text("매칭")
                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                    .font(.system(size: 23))
                    .foregroundColor(Color.white)
                Spacer().frame(height:5)
                Text("주파수")
                    .foregroundColor(Color.white)
            }
            
        }
        .padding(30)
        .background(Color.purple)
        .cornerRadius(20)
    }
}



struct MyBasicCard_Previews: PreviewProvider {
    static var previews: some View {
        MyBasicCard()
    }
}

