//
//  MyBasicCard.swift
//  ProjectH
//
//  Created by 홍홍홍 on 2021/03/07.
//

import SwiftUI

struct MeCard : View {
    
    var icon : String
    var title : String
    var start : String
    var end : String
    var bgColor : Color
    
    var body : some View{
        HStack(spacing:20){
            Image(systemName: icon)
                .font(.system(size:40))
                .foregroundColor(Color.white)
            
        
            VStack(alignment:.leading,spacing:0){
                Divider().opacity(0)
                Text(title)
                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                    .font(.system(size: 23))
                    .foregroundColor(Color.white)
                Spacer().frame(height:5)
                Text("\(start) - \(end)")
                    .foregroundColor(Color.white)
            }
            
        }
        .padding(30)
        .background(bgColor)
        .cornerRadius(20)
    }
}



struct MeCard_Previews: PreviewProvider {
    static var previews: some View {
        MeCard(icon: "doc.fill", title: "채팅", start: "16명", end: "8명", bgColor: Color.yellow)
    }
}

