//
//  DiceView.swift
//  ProjectH
//
//  Created by 홍홍홍 on 2021/03/08.
//

import Foundation
import SwiftUI

struct DiceView: View {
    var body: some View{
        VStack{
            Text("⚀")
                .font(.system(size:300,weight:.bold,design:.monospaced))
                .foregroundColor(Color.init(#colorLiteral(red: 0.3647058904, green: 0.06666667014, blue: 0.9686274529, alpha: 1)))
            Button(action: {
                
            }, label: {
                Text("랜덤 주사위 굴리기")
                    .fontWeight(.black)
            })
        }
      
        
    }
}
struct DiceView_Previews: PreviewProvider{
    static var previews:some View{
        DiceView()
    }
}
